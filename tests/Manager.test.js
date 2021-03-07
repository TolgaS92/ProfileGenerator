const Manager = require("../lib/Manager");
describe("Manager", () => {
    describe("office number", () => {
        it("should get office number", () => {
            const value = "21";
            const example = new Manager("Tolga", 1, "tolgasecme@icloud.com", value);
            expect(example.officeNumber).toEqual(value);
        });
    });
});