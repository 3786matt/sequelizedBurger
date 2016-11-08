CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP,
PRIMARY KEY (id)
);


INSERT INTO wishes (wish) VALUES ('Test1.');
INSERT INTO wishes (wish) VALUES ('Test2.');
INSERT INTO wishes (wish) VALUES ('Test3.');
