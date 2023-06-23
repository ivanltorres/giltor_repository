CREATE DATABASE IF NOT EXISTS inquilinos_ab;
USE inquilinos_ab;


CREATE TABLE user(
    email VARCHAR(50) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL
);