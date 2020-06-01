// Require dependencies
const connection = require("./connection");

//Create orm object to hold all functions
const orm = {
    /**
    * selectAll()
    * Purpose: To grab all information in a given table
    * Parameters: table - table for the information to be displayed from
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    selectAll(table,cb)
    {
        const query = "SELECT * FROM ??;";//Query To select all data
        connection.query(query, [table], cb);//Connection to SQL database
    },//End selectAll()

    /**
    * insertOne()
    * Purpose: To Insert Information in a table
    * Parameters: table - table for the information to be put into
    *             newBurger - Information to be inserted into the table
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    insertOne(table, newBurger, cb)
    {
        const query = "INSERT INTO ?? SET ?;";//Query Of to insert info into a table
        connection.query(query, [table, newBurger], cb);//Connection to SQL database
    },//End insertOne()

    /**
    * updateOne()
    * Purpose: To update information in a given item in a table
    * Parameters: table - table for the information to be displayed from
    *             updatedInformation - Information to be updated
    *             idInfo - ID of the item to be updated
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    updateOne(table, updatedInformation, idInfo, cb)
    {
        const query = "UPDATE ?? SET ? WHERE ?;";//Query To update table
        connection.query(query, [table, updatedInformation,idInfo], cb);//Connection to the SQL database
    },//End updateOne()

    /**
    * deleteOne()
    * Purpose: To delete information in a table
    * Parameters: table - table for the information to be displayed from
    *             idInfo - ID of the item to be deleted
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    deleteOne(table, idInfo, cb)
    {
        const query = "DELETE FROM ?? WHERE ?;";//Query To delete an item
        connection.query(query, [table,idInfo], cb);//Connection to the SQL database
    }//End deleteOne()

};//End orm object

//Export orm to be used by other js
module.exports = orm;