const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("github account", () => {
        it("should set github account", () => {
            const value = "githubUser";
            const example = new Engineer("tolga", 1, "tolgasecme@icloud.com", value);
            expect(example.github).toEqual(value);
        });
    });
    describe("getRole()", () => {
        it("should get the role", () => {
            const role = "Engineer";
            const example = new Engineer("Tolga", 21, "tolgasecme@icloud.com", "githubUser");
            expect(example.getRole()).toEqual(role);
        });
    });
    describe("getGithub()", () => {
        it("should get the github username", () => {
            const githubUsername = "TolgaS92";
            const example = new Engineer("Tolga", 21, "tolgasecme@icloud.com", githubUsername);
            expect(example.getGithub()).toEqual(githubUsername);
        });
    });
});