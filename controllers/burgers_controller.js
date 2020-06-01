//Import dependencies
const express = require("express");
const burger = require("../models/burger.js")
//Use express router
const router = express.Router();  

/**
* get("/")
* Purpose: To render main page on /
*/
router.get("/", (req,res)=>{
    // Grab all information from the database
    burger.selectall((err, data)=>{
        //Error occured
        if(err) throw err;
        //Put all the burger information into an array
        const burgers = data.map(burger => {
            const currentBurger = {
                id: burger.id,
                burger_name: burger.burger_name,
                devoured: burger.devoured
            };
            return currentBurger;
        });
        //Put the array into an object
        const obj = { burgers };
        //Render all burgers into the index handlebars
        res.render("index", obj);
    });//End grabbing all information
});//End get("/")

/**
* post("/api/burgers")
* Purpose: To input information into database table
*/
router.post("/api/burgers", (req,res)=>{
    // Grab post information and put into an object
    const newBurger = {burger_name: req.body.burger_name};
    // Update information with the given ID
    burger.insertOne(newBurger, (err, result)=>{
        if(err) throw err;
        res.redirect("/");
    });//End Update
});//End post("/api/burgers")

/**
* put("/api/burgers/:id")
* Purpose: To update information from database table
*/
router.put("/api/burgers/:id", (req, res)=>{
    //put updated information into objects
    const newInformation = {devoured:req.body.devoured};
    const updatedBurgerId = {id: req.params.id}
    //Update burger Information
    burger.updateOne(newInformation,updatedBurgerId, (err,result)=>{
        //Error
        if(err) 
            return res.status(500).end();
        else if (result.changedRows === 0) 
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        //Success
        res.status(200).end();
    });//End update
});//end put("/api/burgers/:id")

/**
* delete("/api/burgers/:id")
* Purpose: To delete information from database table
*/
router.delete("/api/burgers/:id", (req, res)=>{
    //Grab information and insert into object
    const deletedBurgerId = {id: req.params.id};
    //Delete information from the table
    burger.deleteOne(deletedBurgerId,(err, result)=>{
        //Error
        if(err) 
            return res.status(500).end();
        else if (result.affectedRows === 0) 
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        //Success
        res.status(200).end();
    });//End deleting information from a atable
});//End delete("/api/burgers/:id")

/**
* get("*")
* Purpose: To render 404 page and inform user page doesn't exist
*/
router.get("*", (req, res)=>{
    //Render 404 page
    res.render("404");
});//End get("*")

//export router to be used by other js
module.exports = router;