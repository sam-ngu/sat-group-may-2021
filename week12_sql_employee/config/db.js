const mysql = require("mysql2/promise");

// create the connection to database

const TABLE = "employee_db_new";


function createConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: TABLE,
    });
}

module.exports = {
    createConnection,
    TABLE,
};
