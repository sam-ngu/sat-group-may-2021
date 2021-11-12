const {createConnection, TABLE} = require("./../config/db");



async function getManagers(){
    // return all the records without manager_id
    const query = "SELECT * FROM " + TABLE + ".employees where manager_id = null;";
    const connection = await createConnection();
    return connection.execute(query);
}

// CRUD

async function createEmployee(firstName, lastName, roleId, managerId=null){
    
    const includeManager = ', `manager_id`';


    if (managerId === null){
        managerId = ''
    }

    const query = `INSERT INTO \`${TABLE}\`.\`employees\` (\`first_name\`, \`last_name\`, \`role_id\`${ managerId !== null ? includeManager : ''}) VALUES ('${firstName}', '${lastName}', '${roleId}'${managerId !== null ? ', \'' + managerId + '\'' : '' });`;
    const connection = await createConnection();

    const response = await connection.execute(query);
    return response[0];
}

function getEmployees(){

}

function updateEmployee(){

}

function deleteEmployee(){

}

module.exports = {
    getManagers,
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
}
