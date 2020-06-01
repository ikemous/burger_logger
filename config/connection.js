// Import Depencies
const mysql = require("mysql");

/**
 * connection
 * Purpose: To Create a connection to an SQL database
 * Parameters: None
 * Return: None
 */
const connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "secret",
        database: "burgers_db"
    }
);//End connection

/**
 * connection.connect
 * Purpose: To connect to a database
 * Parameters: None
 * Return: None
 */
connection.connect(err=>{
    if (err) 
    {
        console.error("error connecting: " + err.stack);
        return;
    }
        console.log("connected as id " + connection.threadId);
});//End connection.connect

//Export connection for other js use
module.exports = connection;