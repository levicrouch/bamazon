var mySQL = require("mySQL");
var inquirer = require("inquirer");
var arrItems = [];
var connection;
var objItems = {};

var objCreds = {
    getCreds: function () {
        // function to grab username
        // if username and password are not already set then prompt to capture credentials
        if (!this.username && !this.password) {
            inquirer.prompt([{
                name: "username",
                type: "input",
                message: "Please enter a username to connect to your local MySQL instance"
            },
            {
                name: "password",
                type: "input",
                message: "Please enter a password to connect to your local MySQL instance"
            }]).then(function (answer) {
                if (answer.username === "local") {
                    // if local is entered, uses my local credentials
                    console.log("You entered local as your username");
                    objCreds = {
                        username: "dbuser",
                        password: "SecureSQLPw%1",
                    }
                    logIntoDatabase(objCreds);
                } else {
                    objCreds = {
                        username: answer.username,
                        password: answer.password,
                    }
                    logIntoDatabase(objCreds);

                }

            });
        }
    },
}


objCreds.getCreds();

function logIntoDatabase(objCreds) {
    // console.log(objCreds);
    connection = mySQL.createConnection({
        host: "localhost",
        port: 3306,
        user: objCreds.username,
        password: objCreds.password,
        database: "bamazon"
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected to MySQL");
        startUp();
    });
}

function startUp() {
    var sql = "SELECT * FROM products";
    connection.query(sql, function (err, res) {
        if (err) throw err
        inquirer.prompt([
            {
                name: "choice",
                type: "list",
                choices: function () {
                    for (var i = 0; i < res.length; i++) {
                        // push the db items into an array
                        arrItems.push(res[i].product_name);
                    }
                    // return the array
                    return arrItems;
                },
                message: "Welcome to Bamazon! Where Emeril shops! Take a look at the selections below and choose an item to buy",
            },
            {
                name: "purchase_amount",
                type: "input",
                message: "How many would you like to buy?"
            }
        ]).then(function (answer) {
            var chosenItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].product_name === answer.choice) {
                    // set the chosen item variable to the actual record data found in the DB
                    chosenItem = res[i];
                }
            }
            // if the amount in stock is greater than the the amount requested to be purchased then allow the purchase
            if (chosenItem.stock_quantity >= parseInt(answer.purchase_amount)) {
                // do math to figure out how much stock remains
                var newStockAmount = chosenItem.stock_quantity - answer.purchase_amount;
                connection.query("UPDATE products SET stock_quantity = " + newStockAmount + " WHERE id = " + chosenItem.id + ";",
                    function (err, res) {
                        if (err) throw err;
                        // do math to figure the final cost
                        var total = parseInt(answer.purchase_amount) * chosenItem.price;
                        // log the amount purchased
                        console.log("Thank You for your order, you have been charged: " + total + " for: " +
                            answer.purchase_amount + " " + chosenItem.product_name + "(s)");
                        connection.end();
                    });
            } else {
                // inform shopper that there is not enough stock to complete the purchase
                console.log("Sorry, you requested: " + answer.purchase_amount + " " +
                    chosenItem.product_name + "(s) " + "There are " + chosenItem.stock_quantity + " available for purchase");
                console.log("Please try again!");
                startUp();
            }
        })
    });
}
