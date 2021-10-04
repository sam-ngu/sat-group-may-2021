const createConnection = require("./../config/db");

// create
async function createRole(title, salary, department_id) {
    const query =
        "INSERT INTO `employee_db_new`.`roles` (`title`, `salary`, `department_id`) VALUES ('" +
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
function getRoles() {}

// update
// updateRole({
//     name: "abcde"
// })

function updateRole(id, payload) {
    // UPDATE `employee_db_new`.`Roles` SET `name` = 'finance123' WHERE (`id` = '1');
}

// delete
function deleteRole(id) {}

module.exports = {
    createRole,
    getRoles,
    updateRole,
    deleteRole,
};
