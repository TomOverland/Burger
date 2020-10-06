var mysql = require("mysql");
const secrets = require("./config");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: secrets.username,
  password: secrets.password,
  database: "burgers_db",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;
