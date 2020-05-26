const connection = require("./connection");

const orm = {
    selectAll(table)
    {
        const query = "SELECT * FROM ??"
        connection.query(query, [table],(err, res)=>{
            if(err) throw err;
            console.log(res);
        });
    },
    insertOne(table, newBurger)
    {
        const query = "INSERT INTO ?? SET ?";
        connection.query(query, [table, newBurger], (err, res)=>{
            if(err) throw err;
        });
    },
    updateOne(table, updatedInformation, idInfo)
    {
        const query = "UPDATE ?? SET ? WHERE ?";
        connection.query(query, [table, updatedInformation,idInfo], (err,res)=>{
            if(err) throw err;
        });
    }

};

module.exports = orm