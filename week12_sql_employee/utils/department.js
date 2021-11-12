const {createConnection, TABLE} = require("./../config/db");

// create
async function createDepartment(name) {
    const query =
        "INSERT INTO `" + TABLE + "`.`departments` (`name`) VALUES ('" +
        name +
        "');";
    const connection = await createConnection();

    return connection.execute(query);
}

// read
async function getDepartments(limit = 1000) {

    const query = "SELECT * FROM " + TABLE + ".departments limit " + limit + ";";

    const connection = await createConnection();

    const response = await connection.execute(query);
    return response[0]
}

// update
// updateDepartment({
//     name: "abcde"
// })

function updateDepartment(id, payload) {

    // UPDATE `" + TABLE + "`.`departments` SET `name` = 'finance123' WHERE (`id` = '1');



}

// delete
function deleteDepartment(id) {}

module.exports = {
    createDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment,
};
