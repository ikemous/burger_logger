// Import dependices
const orm = require("../config/orm.js");

// Create burger object
const burger = {

    /**
    * selectAll()
    * Purpose: To grab all information in a given table
    * Parameters: cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    selectAll(cb)
    {
        orm.selectAll("burgers", cb);//Connection to database
    },//End selectAll()

    /**
    * insertOne()
    * Purpose: To Insert Information in a table
    * Parameters: newBurger - Information to be inserted into the table
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    insertOne(newBurger, cb)
    {
        orm.insertOne("burgers", newBurger, cb);//Connection to the database
    },//End insertOne()

    /**
    * updateOne()
    * Purpose: To update information in a given item in a table
    * Parameters: updatedInformation - Information to be updated
    *             burgerId - ID of the item to be updated
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    updateOne(updatedInformation, burgerId, cb)
    {
        orm.updateOne("burgers", updatedInformation, burgerId, cb);//Connection to the database
    },//End updateOne()

    /**
    * deleteOne()
    * Purpose: To delete information in a table
    * Parameters: idInfo - ID of the item to be deleted
    *             cb - callback function to manipulate data
    * Return: cb - callbackfuntion
    */
    deleteOne(idInfo, cb)
    {
        orm.deleteOne("burgers", idInfo, cb);//Connection To The Database
    }//End deleteOne()
};//End burger object

//Export burger to be used by other js
module.exports = burger;