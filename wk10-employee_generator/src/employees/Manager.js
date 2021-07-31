const BaseEmployee = require("./BaseEmployee");

class Manager extends BaseEmployee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name);

        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getOfficeNumber = function () {
    return this.getOfficeNumber;
};

BaseEmployee.prototype.getRole = function () {
    return "Manager";
};

module.exports = Manager;
