const Employee = require('./Employee');

class Intern extends Employee {
    constructor({name, id, email, role, school}) {
        super({name, id, email, role});
        this.school = school;
    }

    getSchool() { 
        return this.school; 
    }

    getRole() {
        return this.role;
    }

    buildInternCard(){
        return `
        <div class="card col-3 intern">
          <div class="card-body">
            <h5 class="card-title">${this.getName()}
              <ul class="list-group">
                <li class="list-group-item">Role: ${this.getRole()}</li>
                <li class="list-group-item">Employee ID: ${this.getId()}</li>
                <li class="list-group-item">Email: ${this.getEmail()}</li>
                <li class="list-group-item">Office: ${this.getSchool()}</li>
              </ul>
          </div>
        </div>`; 
    }
}

module.exports = Intern;