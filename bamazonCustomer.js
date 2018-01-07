var mySQL = require("mySQL");
var inquirer = require("inquirer");

function getCreds(creds) {
    // prompt for username and password to the users MySQL instance
    if (!creds) {
        inquirer.prompt([{
            name: "username",
            type: "input",
            message: "Please enter a username to connect to your local MySQL instance"
        },
        {
            name: "password",
            type: "password",
            message: "Please enter the password associated with the account to access your local MySQL instance"
        }]).then(function (answer) {
            // if 'local' is entered, then use my credentials to connect to db
            if (answer.username === "local") {
                console.log("You entered local as your username");
                var connection = mySQL.createConnection({
                    host: "localhost",
                    port: 3306,
                    // local username
                    user: "dbuser",
                    // Your password
                    password: "SecureSQLPw%1",
                    database: "bamazon"
                });
            } else {
                // use the credentials captured by inquirer to connect to the local MySQL instance 
                var connection = mySQL.createConnection({
                    host: "localhost",
                    port: 3306,
                    // local username
                    user: answer.username,
                    // Your password
                    password: answer.password,
                    database: "bamazon"
                });
            }
            if (answer.username && answer.password) {
                // connect to SQL
                connection.connect(function (err) {
                    if (err) throw err;
                    // return all rows to the console
                    var sql = "SELECT * FROM products";
                    connection.query(sql, function (err, res) {
                        console.log("---------------------------------");
                        for (var i = 0; i < res.length;i++){
                            console.log("Product:", res[i].product_name + 
                            " | " + "Department:", res[i].department_name +
                            " | " + "Price:", res[i].price +
                            " | " + "Stock:", res[i].stock_quantity
                        );
                        }
                        console.log("---------------------------------");
                    });
                });
            }
        });
    }
}
getCreds(false);