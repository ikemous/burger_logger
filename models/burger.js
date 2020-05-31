const orm = require("../config/orm.js");

const burger = {
    selectall(cb)
    {
        orm.selectAll("burgers", cb);
    },
    insertOne(newBurger, cb)
    {
        orm.insertOne("burgers", newBurger, data=>{
            cb(data);
        });
    },
    updateOne(updatedInformation, burgerId, cb)
    {
        orm.updateOne("burgers", updatedInformation, burgerId, cb);
    },
    deleteOne(idInfo, cb)
    {
        orm.deleteOne("burgers", idInfo, cb);
    }
};


module.exports = burger;