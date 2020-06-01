-- Used for initial creation of DB
DROP DATABASE IF EXISTS burgers_db;
-- Create Database
CREATE DATABASE burgers_db;
-- Use burgers_db
USE burgers_db;

-- burgers
--      id: placement of item
--      burger_name: name of the burger
--      devoured: boolean to claim if the burger has been eaten or not
CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);--End burgers Table