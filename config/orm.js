const connection = require("./connection");

const orm = {
    selectAll(table,cb)
    {
        const query = "SELECT * FROM ??"
        connection.query(query, [table],(err, res)=>{
            if(err) throw err;
            cb(res)
        });
    },
    insertOne(table, newBurger, cb)
    {
        const query = "INSERT INTO ?? SET ?";
        connection.query(query, [table, newBurger], (err, res)=>{
            if(err) throw err;
            cb(res);
        });
    },
    updateOne(table, updatedInformation, idInfo, cb)
    {
        const query = "UPDATE ?? SET ? WHERE ?";
        connection.query(query, [table, updatedInformation,idInfo], (err,res)=>{
            if(err) throw err;
            cb(res)
        });
    }

};

module.exports = orm