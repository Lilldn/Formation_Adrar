-- ~~~~~~~ Section de Debug ~~~~~~~ --
SET foreign_key_checks = 0;
DROP USER IF EXISTS 'admin'@'127.0.0.1';
DROP USER IF EXISTS 'developer'@'127.0.0.1';
DROP TABLE IF EXISTS shop_db.Addresses;
DROP TABLE IF EXISTS shop_db.Customers;
DROP TABLE IF EXISTS shop_db.Orders;
DROP TABLE IF EXISTS shop_db.Products;
DROP TABLE IF EXISTS shop_db.Orders_Products;
SET foreign_key_checks = 0;

-- Question 1
CREATE database IF NOT EXISTS shop_db;
USE shop_db;

-- Question 3
CREATE TABLE Customers (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(16) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(32) NOT NULL,
create_time TIMESTAMP
);

CREATE TABLE Addresses (
id INT PRIMARY KEY AUTO_INCREMENT,
road_number INT,
road_name VARCHAR(100) NOT NULL,
zip_code CHAR(5) NOT NULL,
city_name VARCHAR(100) NOT NULL,
country_name VARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
id INT PRIMARY KEY AUTO_INCREMENT,
ref VARCHAR(45) NOT NULL UNIQUE,
date DATE NOT NULL,
shipping_cost DECIMAL(6,2) DEFAULT 0, 
total_amount DECIMAL(6,2) DEFAULT 0
);

CREATE TABLE Products (
ref CHAR(20) PRIMARY KEY,
name VARCHAR(100) NOT NULL,
price DECIMAL(6,2) NOT NULL,
description LONGTEXT, 
stock INT DEFAULT 0
);

CREATE TABLE Orders_Products (
id_orders int,
ref_products VARCHAR(45),
FOREIGN KEY (ref_products) REFERENCES Products(ref) ON DELETE CASCADE,
FOREIGN KEY (id_orders) REFERENCES Orders(id) ON DELETE CASCADE,
quantity INT DEFAULT 0,
PRIMARY KEY(ref_products,id_orders)
);
