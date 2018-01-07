DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(255) NOT NULL,
 department_name VARCHAR(255) NOT NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity INTEGER NOT NULL,
 PRIMARY KEY (item_id)
);

-- Seed data
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bowling Ball", "Sporting Goods", 159.99, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Rain Bird Anti-Siphon Jar Top Anti-Siphon Valve", "Home Improvement", 15.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Rain Bird XBD-80 Xeri 8-Outlet 1/4-Inch Drip Manifold", "Home Improvement", 18.38, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Rain Bird SW10-30PS Drip Irrigation Spot Watering Dripper/Emitter", "Home Improvement", 7.80, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Rain Bird T22-250S Drip Irrigation Tubing", "Home Improvement", 14.98, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Samsung SSD 1 TB", "Electronics", 249.99, 108);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Blu-Ray Movie Blade Runner 2049", "Entertainment", 24.99, 156);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Blu-Ray Movie American Made", "Entertainment", 19.96, 146);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Blu-Ray Movie Dunkirk", "Entertainment", 22.99, 157);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Blu-Ray Movie IT", "Entertainment", 24.99, 108);
