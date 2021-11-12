const {createConnection, TABLE} = require("./../config/db");

// create
async function createRole(title, salary, department_id) {
    const query =
        "INSERT INTO `" + TABLE + "`.`roles` (`title`, `salary`, `department_id`) VALUES ('" +
        title +
        "', '" +
        salary +
        "', '" +
        department_id +
        "')";

    const connection = await createConnection();

    return connection.execute(query);
}

// read
async function getRoles() {

    const query = "SELECT * FROM " + TABLE +".roles;";
    const connection = await createConnection();
    const response = await connection.execute(query);
    return response[0];

}

// update
// updateRole({
//     name: "abcde"
// })

function updateRole(id, payload) {
    // UPDATE `" + TABLE + "`.`Roles` SET `name` = 'finance123' WHERE (`id` = '1');
}

// delete
function deleteRole(id) {}

module.exports = {
    createRole,
    getRoles,
    updateRole,
    deleteRole,
};
