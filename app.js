const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRender");

const outPut = path.resolve(__dirname, "TeamProfilePage");
const outPutJoin = path.join(outPut, "TeamProfileGenerated.html");

const createdTeam = [];

const teamCreating = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'workers',
            message: 'Which employee would you like to enter?',
            choices: ['Manager', 'Engineer', 'Intern', 'Im done adding employees']
        }
    ]).then(function (workers) {
        switch (workers.workers) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Im done adding employees":
                init();
                console.log("Page will be created!");
                break;
        }
    })
}

function createManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of Manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number for the Manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Manager email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for Manager?'
        }
    ]).then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        createdTeam.push(manager);
        teamCreating();
    })
}

function createEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of Engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number for the Engineer?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Github username for the Engineer?'
        }
    ]).then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        createdTeam.push(engineer);
        teamCreating();
    })
}

function createIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of Intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number for the Intern?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Intern email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school name for Intern?'
        }
    ]).then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        createdTeam.push(intern);
        teamCreating();
    })
}

const init = () => {
    fs.writeFileSync(outPutJoin, render(createdTeam))
    console.log("employees created");
}

teamCreating();