const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();  

router.get("/", (req,res)=>{
    const obj = {
        title: "test"
    };
    res.render("index", obj);
});

module.exports = router;