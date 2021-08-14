const mysql = require("mysql2/promise");

// create the connection to database

function createConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "employee_db_new",
    });
}

module.exports = createConnection;
