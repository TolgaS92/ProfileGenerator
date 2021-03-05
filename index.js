const inquirer = require('inquirer');

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
                console.log("Page will be created!");
                break;
        }
    })
}

function createManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'What is the name of Manager?'
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'What is the ID number for the Manager?'
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'What is the Manager email?',
        },
        {
            type: 'input',
            name: 'managergithub',
            message: 'What is the Github username for the Manager?'
        }
    ]).then(function () {
        inquirer.prompt([
            {
                type: 'list',
                name: 'newemployee',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            }
        ]).then(function (answer) {
            switch (answer.newemployee) {
                case 'Yes':
                    teamCreating();
                    break;
                case 'No':
                    console.log("HTML page will be ready for you..");
                    break;
            }
        })
    })
}

function createEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'What is the name of Engineer?'
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'What is the ID number for the Engineer?'
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'What is the Engineer email?',
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: 'What is the Github username for the Engineer?'
        }
    ]).then(function () {
        inquirer.prompt([
            {
                type: 'list',
                name: 'newemployee',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            }
        ]).then(function (answer) {
            switch (answer.newemployee) {
                case 'Yes':
                    teamCreating();
                    break;
                case 'No':
                    console.log("HTML page will be ready for you..");
                    break;
            }
        })
    })
}

function createIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What is the name of Intern?'
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'What is the ID number for the Intern?'
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'What is the Intern email?',
        },
        {
            type: 'input',
            name: 'interngithub',
            message: 'What is the Github username for the Intern?'
        }
    ]).then(function () {
        inquirer.prompt([
            {
                type: 'list',
                name: 'newemployee',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            }
        ]).then(function (answer) {
            switch (answer.newemployee) {
                case 'Yes':
                    teamCreating();
                    break;
                case 'No':
                    console.log("HTML page will be ready for you..");
                    break;
            }
        })
    })
}

const init = () => {
    teamCreating()
        .then(() => console.log("Team creaating question succesfully loaded!"))
        .catch((err) => console.error(err));
};

init();
