var mysql = require("mysql");
const util = require("util");

// use Jaws DB if Heroku detects that it exists, otherwise use localhost
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Replace user and password with your MySQL login info
    user: "root",
    password: "RFpd#2530",
    database: "burgers_db",
  });
}

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
