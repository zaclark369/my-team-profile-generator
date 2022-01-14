const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({ name, id, email, role, github }) {
        super({name, id, email, role});
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role;
    }
    buildEngineerCard(){
        return `
        <div class="card col-3 engineer">
          <div class="card-body">
            <h5 class="card-title">${this.getName()}
              <ul class="list-group">
                <li class="list-group-item">Role: ${this.getRole()}</li>
                <li class="list-group-item">Employee ID: ${this.getId()}</li>
                <li class="list-group-item">Email: ${this.getEmail()}</li>
                <li class="list-group-item">Office: ${this.getGitHub()}</li>
              </ul>
          </div>
        </div>`;
}
}

module.exports = Engineer;