const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school name create", () => {
        it("get school name given", () => {
            const schoolName = "DU";
            const example = new Intern("Tolga", 1, "tolgasecme@icloud.com", schoolName);
            expect(example.school).toEqual(schoolName);
        });
    });
});