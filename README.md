# bamazon

## Overview:
What is BAMazon you ask? Some say it is simply a knock-off on Amazon <img src="images/amazonLogo.png"> for use by students to learn MySQL by reading and setting data via a pseudo-store front. By I have it on good authority that BAMazon is actually where Emeril Lagassi shops for his restaurants.

This application runs on node and uses the "mysql" and "inquirer" packages to provide the backend and UI. This application is the customer facing portion which provides a store-front for users to shop for food related items. The user will be presented with a list of 10 items available for purchase, they will select the item and enter the amout to purchase. If there is enough of that item in stock, they will be allowed to proceed with the purchase. If there are not enough items in stock, the user will be notified and allowed to adjust the amount they would like to purchase.

## Setup Instructions:

### Node Setup:
* Clone the [repository] (https://github.com/levicrouch/bamazon.git) to your local drive 
* Node must be installed, [8.9.4 or greater] (https://nodejs.org/en/download/)
* From the command-line install the dependent packages via the following command:
    * `npm install`
* Execute the application:
    * `node bamazonCustomer.js`

### MySQL Setup:
* Install [MySQL server] (https://www.mysql.com/downloads/)
* From your MySQL client application -or- MySQL Workbench, open bamazon.sql
* Execute the SQL script to create the database, table, columns and row data for the application
* Verify installation by executing:
    * `USE bamazon;`
    * `SELECT * FROM products;`

## Application Usage:
* Once node `bamazonCustomer.js has been executed, the user will be prompted to enter a username and password to connect to their local MySQL instance.
    * <img src="images/sqlUserName.png">
* Once connected to the local MySQL instance, the user is presented with a list of items for purchase.
    * <img src="images/shoppingList.png">
* The user will move the arrow key up and and down to select the item they wish to purchase
* Press enter to choose a given item
* The user then enters the amount they would like to purchase
* If there are enough items in stock, the user is charged for all items purchased
    * <img src="images/orderConfirmation.png">
* If there are not enough items in stock, the user is presented with the main screen to attempt the purchase once again. A message shows the user how many items remain so that they can be successful in placing their order.
    * <img src="images/outOfStock.png">

## Technical Notes:
Typically a production application wouldn't have an option to enter the username and password of the SQL instance presented to the user. This functionality was intentionally used to provide the person grading this project the ability to enter their credentials to their own MySQL instance without having to modify the code directly. 