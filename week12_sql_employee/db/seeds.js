const mysql = require('mysql2');

const createConnection = require('./../config/db');

async function dropAllTables(){

    const connection = await createConnection();


    await connection.execute("SET FOREIGN_KEY_CHECKS=0;");

    const tables = [
        'departments',
        'roles',
        'employees',
    ]

    for (let index = 0; index < tables.length; index++) {
        const table = tables[index];
        const query = `DROP TABLE IF EXISTS  \`${table}\``;
        await connection.execute(query)
    }
    await connection.execute("SET FOREIGN_KEY_CHECKS=1;");



}


async function createDepartmentTable(){

    const query = "CREATE TABLE `departments` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);"

    const connection = await createConnection();

    return connection.execute(query);
}

async function createRoleTable(){

    const query = "CREATE TABLE `roles` (`id` INT NOT NULL AUTO_INCREMENT,`title` VARCHAR(255) NOT NULL,`salary` DECIMAL NOT NULL,`department_id` INT NOT NULL,PRIMARY KEY (`id`));"
    const connection = await createConnection();

    await connection.execute(query);

    const indexQuery = "ALTER TABLE `roles` ADD INDEX `fk_roles_1_idx` (`department_id` ASC) VISIBLE;";

    const foreignKeyQuery = "ALTER TABLE `roles` ADD CONSTRAINT `fk_roles_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;"

    await connection.execute(indexQuery);
    await connection.execute(foreignKeyQuery);


}

async function createEmployeeTable(){

    const query = "CREATE TABLE `employees` (`id` INT NOT NULL AUTO_INCREMENT,`first_name` VARCHAR(255) NOT NULL,`last_name` VARCHAR(255) NOT NULL,`role_id` INT NOT NULL,`manager_id` INT NOT NULL,PRIMARY KEY (`id`));"
    const connection = await createConnection();
    await connection.execute(query);

    const indexQuery = "ALTER TABLE `employees` ADD INDEX `fk_employees_1_idx` (`role_id` ASC) VISIBLE, ADD INDEX `fk_employees_2_idx` (`manager_id` ASC) VISIBLE;";

    await connection.execute(indexQuery);
    const fkRoleQuery = "ALTER TABLE `employees` ADD CONSTRAINT `fk_employees_1` FOREIGN KEY (`role_id`) REFERENCES `employee_db_new`.`roles` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;" 

    await connection.execute(fkRoleQuery);

    const fkManagerQuery = "ALTER TABLE `employees` ADD CONSTRAINT `fk_employees_2` FOREIGN KEY (`manager_id`) REFERENCES `employee_db_new`.`employees` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;"
    
    await connection.execute(fkManagerQuery);

}

async function main(){
    // drop all the tables
    await dropAllTables();

    // create the tables
    
    // departments
    await createDepartmentTable();
    
    // roles
    await createRoleTable();
    // employees
    await createEmployeeTable();


    // generate fake data  -- faker
}


main();





