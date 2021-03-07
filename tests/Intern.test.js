const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school name create", () => {
        it("get school name given", () => {
            const schoolName = "DU";
            const example = new Intern("Tolga", 1, "tolgasecme@icloud.com", schoolName);
            expect(example.school).toEqual(schoolName);
        });
    });
    describe("getRole()", () => {
        it("should get the role", () => {
            const role = "Intern";
            const example = new Intern("Tolga", 21, "tolgasecme@icloud.com", "DU");
            expect(example.getRole()).toEqual(role);
        });
    });
    describe("getSchool()", () => {
        it("should get the school info given", () => {
            const school = "DU";
            const example = new Intern("Tolga", 21, "tolgasecme@icloud.com", school);
            expect(example.getSchool()).toEqual(school);
        });
    });
});