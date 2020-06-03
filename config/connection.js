// Import Depencies
const mysql = require("mysql");
let connection;
/**
 * connection
 * Purpose: To Create a connection to an SQL database
 * Parameters: None
 * Return: None
 */
if (process.env.JAWSDB_URL)
{
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}//End connection
else
{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "secret",
        database: "burgers_db"
    });
}//End Connection


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