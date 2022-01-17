const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');

class Team {
    constructor(manager, engineerLi, internLi) {
        this.manager = manager;
        this.engineerLi = [];
        this.internLi = [];
    }

    build() {
        const newTeam = async() => {
            const managerAnswer = await this.managerPrompt();
            this.manager = new Manager(managerAnswer);
            this.buildLines();
        }
        newTeam();
    }

    async managerPrompt() {
        const managerDetails = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please input the manager of your team',
              },
              {
                name: 'email',
                type: 'input',
                message: 'Please enter the managers email address',
              },
              {
                name: 'id',
                type: 'input',
                message: "Please input manager's employee ID",
              },
              {
                name: 'office',
                type: 'input',
                message: "Please input manager's office number",
              },
        ]);
        managerDetails.role = 'manager';
        return managerDetails;
    }
    buildLines() {
    const engineerPrompt = async() => {
        const engineerDetails = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please input an engineer of your team',
              },
              {
                name: 'email',
                type: 'input',
                message: 'Please enter the engineers email address',
              },
              {
                name: 'id',
                type: 'input',
                message: "Please input engineer's employee ID",
              },
              {
                name: 'github',
                type: 'input',
                message: "Please input engineer's gitHub",
              },
              {
                  name: 'additional',
                  type: 'confirm',
                  message: "would you like to add an additional employee"
              }
        ]);
        engineerDetails.role = 'Engineer';
        this.engineerLi.push(new Engineer(engineerDetails));
        if (engineerDetails.additional) return engineerPrompt();
        this.buildHTML();
    };

    const internPrompt = async() => {
        const internDetails = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please input an intern on your team',
              },
              {
                name: 'email',
                type: 'input',
                message: 'Please enter the interns email address',
              },
              {
                name: 'id',
                type: 'input',
                message: "Please input intern's employee ID",
              },
              {
                name: 'school',
                type: 'input',
                message: "Please input intern's school",
              },
              {
                  name: 'additional',
                  type: 'confirm',
                  message: "would you like to add an additional employee"
              }
        ]);
        internDetails.role = 'Intern';
        const newIntern2 = new Intern(internDetails);
        this.internLi.push(newIntern2);
        if (internDetails.additional) return internPrompt();
        engineerPrompt();
    };
    internPrompt();
}

buildHTML () {
    const HTMLTop = fs.readFileSync('./assets/HTMLTop.txt', 'utf8', err => {throw new Error(err);});
    const HTMLBottom = fs.readFileSync('./assets/HTMLBottom.txt', 'utf8', err => {throw new Error(err);});
    const style =fs.readFileSync('./assets/style.css', 'utf8', err => {throw new Error(err);});

    const manageCard = this.manager.buildManageCard();

    const engineerCard = this.engineerLi.map(engineer => {
        return engineer.buildEngineerCard() + '\n';
    });

    const internCard = this.internLi.map(intern => {
        return intern.buildInternCard() + '\n';
    });

    const HTML = `${HTMLTop}\n${manageCard}\n${engineerCard}\n${internCard}\n${HTMLBottom}`;

    fs.writeFileSync('./dist/Team.html', HTML, 'utf8', err => {throw new Error(err);});
    fs.writeFileSync('./dist/Team-style.css', style, 'utf8', err => {throw new Error(err);});
    }

 
}

module.exports = Team;