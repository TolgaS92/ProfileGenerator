const path = require("path");
const fs = require("fs");

const tempsDir = path.resolve(__dirname, "../dist");

const render = createdTeam => {
    const html = [];
    html.push(createdTeam.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
    html.push(createdTeam.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)));
    html.push(createdTeam.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)));
    return renderMain(html.join(""));
};

const renderManager = manager => {
    let temp = fs.readFileSync(path.resolve(tempsDir, "Manager.html"), "utf-8");
    temp = replaceHold(temp, "name", manager.getName());
    temp = replaceHold(temp, "role", manager.getRole());
    temp = replaceHold(temp, "email", manager.getEmail());
    temp = replaceHold(temp, "id", manager.getId());
    temp = replaceHold(temp, "officeNumber", manager.getOfficeNumber());
    return temp;
}

const renderEngineer = engineer => {
    let temp = fs.readFileSync(path.resolve(tempsDir, "Engineer.html"), "utf-8");
    temp = replaceHold(temp, "name", engineer.getName());
    temp = replaceHold(temp, "role", engineer.getRole());
    temp = replaceHold(temp, "email", engineer.getEmail());
    temp = replaceHold(temp, "id", engineer.getId());
    temp = replaceHold(temp, "github", engineer.getGithub());
    return temp;
}
const renderIntern = intern => {
    let temp = fs.readFileSync(path.resolve(tempsDir, "Intern.html"), "utf-8");
    temp = replaceHold(temp, "name", intern.getName());
    temp = replaceHold(temp, "role", intern.getRole());
    temp = replaceHold(temp, "email", intern.getEmail());
    temp = replaceHold(temp, "id", intern.getId());
    temp = replaceHold(temp, "school", intern.getSchool());
    return temp;
}

const renderMain = html => {
    const temp = fs.readFileSync(path.resolve(tempsDir, "main.html"), "utf-8");
    return replaceHold(temp, "team", html);
}

const replaceHold = (temp, placeHolder, value) => {
    const pattern = new RegExp("{{ " + placeHolder + " }}", "g");
    return temp.replace(pattern, value);
};

module.exports = render;