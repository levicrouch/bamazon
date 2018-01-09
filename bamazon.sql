DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(255) NOT NULL,
 department_name VARCHAR(255) NOT NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity INTEGER NOT NULL,
 PRIMARY KEY (id)
);

-- Seed data
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Frying Pan", "Cookware", 59.99, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Spicey Spice Pack", "Grocery", 9.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Spatula", "Kitchen", 2.99, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Professional Mixer", "Kitchen Electronics", 399.99, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("8 Setting Silverware Set", "Kitchen", 89.99, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Sweet Spice Pack", "Grocery", 9.99, 108);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("12 Quart Sauce Pan", "Cookware", 34.95, 156);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("30 Quart Stock Pot", "Cookware", 199.99, 146);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Stainless Steel Cheese Grater", "Kitchen", 15.99, 157);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("BAM! Cooking with Emeril CookBook", "Books", 24.99, 108);
