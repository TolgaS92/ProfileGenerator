const inquirer = require('inquirer');

const teamCreating = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'workers',
            message: 'Which employee would you like to enter?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])

}


const init = () => {
    teamCreating()
        .then(() => console.log("Team creaating question succesfully loaded!"))
        .catch((err) => console.error(err));
};

init();
