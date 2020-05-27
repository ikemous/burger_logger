const orm = require("../config/orm.js");

const burger = {
    selectall(cb)
    {
        orm.selectAll("burgers", data=>{
            cb(data);
        });
    },
    insertOne(newBurger, cb)
    {
        orm.insertOne("burgers", newBurger, data=>{
            cb(data);
        });
    },
    updateOne(updatedInformation, burgerId, cb)
    {
        orm.updateOne("burgers", updatedInformation, burgerId, data=>{
            cb(data);
        });
    }
};


module.exports = burger;