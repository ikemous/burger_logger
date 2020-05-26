const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller")

const server = express();

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
server.use(express.static("public"));

// Parse request body as JSON
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

server.use(router);

server.listen(PORT, ()=>{
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})