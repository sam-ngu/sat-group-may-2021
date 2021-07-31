
class BaseEmployee {


    constructor(id, email, name){

        this.id = id
        this.email = email
        this.name = name
    }

}

BaseEmployee.prototype.getRole = function(){
    return "Employee"
}

BaseEmployee.prototype.getEmail = function () {
    return this.email;
};

BaseEmployee.prototype.getName = function(){
    return this.name
}
BaseEmployee.prototype.getId = function () {
    return this.id;
};

module.exports = BaseEmployee
