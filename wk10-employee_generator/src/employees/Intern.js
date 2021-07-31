

const BaseEmployee = require("./BaseEmployee");

class Intern extends BaseEmployee {
    constructor(id, email, name, school) {
        super(id, email, name);

        this.school = school;
    }
}

Intern.prototype.getSchool = function () {
    return this.getSchool;
};

BaseEmployee.prototype.getRole = function () {
    return "Intern";
};

module.exports = Intern;