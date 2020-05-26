const express = require("express");
const exphbs = require("express-handlebars");

const server = express();

const PORT = process.env.PORT || 8080;

// Parse request body as JSON
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

server.listen(PORT, ()=>{
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})