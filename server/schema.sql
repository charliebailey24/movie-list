DROP DATABASE IF EXISTS moviesdb;

CREATE DATABASE moviesdb;

USE moviesdb;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO movies VALUES (null, 'Mean Girls');
INSERT INTO movies VALUES (null, 'Hackers');
INSERT INTO movies VALUES (null, 'The Grey');
INSERT INTO movies VALUES (null, 'Sunshine');
INSERT INTO movies VALUES (null, 'Sunshine');
INSERT INTO movies VALUES (null, 'Ex Machina');

/*
mysql -u root < server/schema.sql
*/