create database if not exists testdb;
use testdb; 

create table if not exists users (
id int primary key auto_increment not null, 
`name` varchar(50) not null, 
firstname varchar(50), 
email varchar(100) not null, 
birthdate DATE
);

INSERT INTO users(`name`,firstname,email)
VALUES('Cartman', 'Eric', 'eric@cartman.com');

UPDATE users
SET birthdate = '1997-08-13';

UPDATE users
SET email = 'eric.cartman@south-park.com'
WHERE `name` = 'Cartman' AND firstname = 'Eric';

SELECT * FROM users;
