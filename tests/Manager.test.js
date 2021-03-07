const Manager = require("../lib/Manager");
describe("Manager", () => {
    describe("office number", () => {
        it("should get office number", () => {
            const value = "21";
            const example = new Manager("Tolga", 1, "tolgasecme@icloud.com", value);
            expect(example.officeNumber).toEqual(value);
        });
    });
    describe("getRole()", () => {
        it("should get the role", () => {
            const role = "Manager";
            const example = new Manager("Tolga", 1, "tolgasecme@icloud.com", 21);
            expect(example.getRole()).toEqual(role);
        });
    });
    describe("getOfficeNumber()", () => {
        it("should get the office number", () => {
            const officeNumber = 34;
            const example = new Manager("Tolga", 1, "tolgasecme@icloud.com", officeNumber);
            expect(example.getOfficeNumber()).toEqual(officeNumber);
        });
    });
});