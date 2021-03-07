const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("github account", () => {
        it("should set github account", () => {
            const value = "githubUser";
            const example = new Engineer("tolga", 1, "tolgasecme@icloud.com", value);
            expect(example.github).toEqual(value);
        });
    });
});