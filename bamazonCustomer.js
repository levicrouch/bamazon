var mySQL = require("mySQL");
var inquirer = require("inquirer");
var arrItems = [];

// var objCreds = {
//     getCreds: function () {
//         // function to grab username
// inquirer.prompt([{
//     name: "username",
//     type: "input",
//     message: "Please enter a username to connect to your local MySQL instance"
// },
// {
//     name: "password",
//     type: "input",
//     message: "Please enter a password to connect to your local MySQL instance"
// }]).then(function (answer) {
//     if (answer.username === "local") {
//         // if local is entered, uses my local credentials
//         console.log("You entered local as your username");
//         objCreds = {
//             username: "dbuser",
//             password: "SecureSQLPw%1",
//         }
//     } else {
//         objCreds = {
//             username: answer.username,
//             password: answer.password,
//         }
//     }
// });
//     },
// }
// objCreds.getCreds();
// console.log("Username:", objCreds.getUsername());
var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "dbuser",
    password: "SecureSQLPw%1",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL");
    // connection.end();
    // console.log("dis-connected from MySQL");
    startUp();
});

// function listItems() {
//     // connect to SQL and grab all items
//     connection.connect(function (err) {
//         if (err) throw err;
//         var sql = "SELECT * FROM products";
//         connection.query(sql, function (err, res) {
//             console.log("---------------------------------");
//             for (var i = 0; i < res.length; i++) {
//                 console.log("Item ID:", res[i].item_id +
//                     " | " + "Product:", res[i].product_name +
//                     " | " + "Department:", res[i].department_name +
//                     " | " + "Price:", res[i].price +
//                     " | " + "Stock:", res[i].stock_quantity
//                 );
//                 // push the db items into an array
//                 arrItems.push(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
//             }
//             console.log("---------------------------------");
//             // close the connection
//             connection.end();
//         });
//     });
// }

function startUp() {
    var sql = "SELECT * FROM products";
    connection.query(sql, function (err, res) {
        if (err) throw err;
        // console.log("---------------------------------");
        // for (var i = 0; i < res.length; i++) {
        //     console.log("Item ID:", res[i].item_id +
        //         " | " + "Product:", res[i].product_name +
        //         " | " + "Department:", res[i].department_name +
        //         " | " + "Price:", res[i].price +
        //         " | " + "Stock:", res[i].stock_quantity
        //     );
        // }
        // console.log("---------------------------------");
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function () {
                    var arrItems = [];
                    for (var i = 0; i < res.length; i++) {
                        // push the db items into an array
                        // arrItems.push(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
                        arrItems.push(res[i].item_id);
                    }
                    return arrItems;
                },
                // choices: ["1", "2"],
                message: "Welcome to Bamazon! Take a look at the selections below and choose an item to buy",

            },
            {
                name: "bid",
                type: "input",
                message: "How much would you like to bid?"
            }
        ]).then(function (response) {
            // case 
            console.log("You chose:", response);
        })
    });
}
