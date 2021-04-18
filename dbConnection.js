const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: "database-1.c8yml2raj5dm.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "L5JWGwdQEcvk7SqkATQG",
  database: "new_schema"
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});



module.exports = connection; 