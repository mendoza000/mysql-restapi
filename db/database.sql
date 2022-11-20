-- Active: 1668828896969@@127.0.0.1@3306@companydb
CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id int(11) not null AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT null, 
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);

SELECT * from employee;
show tables;
describe employee;