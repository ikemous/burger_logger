const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();  

router.get("/", (req,res)=>{

    burger.selectall((err, data)=>{
        if(err) throw err;
        const burgers = data.map(burger => {
            const currentBurger = {
                id: burger.id,
                burger_name: burger.burger_name,
                devoured: burger.devoured
            };

            return currentBurger;
        });
        const obj = { burgers };
        
        res.render("index", obj);
    });

});

router.post("/api/burgers", (req,res)=>{
    // console.log(req.body.burger_name);
    const newBurger = {burger_name: req.body.burger_name};
    burger.insertOne(newBurger, (err, result)=>{
        if(err) throw err;
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", (req, res)=>{
    const newInformation = {devoured:req.body.devoured};
    const updatedBurgerId = {id: req.params.id}
    burger.updateOne(newInformation,updatedBurgerId, (err,result)=>{
        if(err) 
            return res.status(500).end();
        else if (result.changedRows === 0) 
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/burgers/:id", (req, res)=>{
    const deletedBurgerId = {id: req.params.id};
    burger.deleteOne(deletedBurgerId,(err, result)=>{
        console.log(result);
        if(err) 
            return res.status(500).end();
        else if (result.affectedRows === 0) 
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;