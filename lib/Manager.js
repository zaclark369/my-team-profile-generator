const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, id, email, role, office}) {
        super({name, id, email, role});
        this.office = office;
    }
}

module.exports = Manager;