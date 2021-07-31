const BaseEmployee = require('./BaseEmployee');


class Engineer extends BaseEmployee {
    constructor(id, email, name, github){
        super(id, email, name);

        this.github = github
    }
}

Engineer.prototype.getGithub = function(){
    return this.getGithub
}

BaseEmployee.prototype.getRole = function () {
    return "Engineer";
};

module.exports = Engineer;