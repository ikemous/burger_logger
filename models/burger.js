const orm = require("../config/orm.js");

const burger = {
    selectall(cb)
    {
        orm.selectAll("burgers", data=>{
            cb(data);
        });
    },
}


module.exports = burger;