const { createDepartment, getDepartments } = require('./utils/department');


getDepartments().then((result) => {
    console.log(result)
})


