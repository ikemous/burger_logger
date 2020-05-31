const connection = require("./connection");

const orm = {
    selectAll(table,cb)
    {
        const query = "SELECT * FROM ??"
        connection.query(query, [table], cb);
    },
    insertOne(table, newBurger, cb)
    {
        const query = "INSERT INTO ?? SET ?";
        connection.query(query, [table, newBurger], cb);
    },
    updateOne(table, updatedInformation, idInfo, cb)
    {
        const query = "UPDATE ?? SET ? WHERE ?";
        connection.query(query, [table, updatedInformation,idInfo], cb);
    }

};

module.exports = orm