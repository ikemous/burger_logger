const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();  

router.get("/", (req,res)=>{

    burger.selectall(data=>{

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

router.post("/", (req,res)=>{
    // console.log(req.body.burger_name);
    const newBurger = {burger_name: req.body.burger_name};
    burger.insertOne(newBurger, result=>{
        res.json({id: result.insertId})
    });
    // console.log(req);
});

module.exports = router;