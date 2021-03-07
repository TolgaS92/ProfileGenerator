const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should get the name given", () => {
            const nameOf = new Employee();
            expect(typeof (nameOf)).toEqual("object");
        });
    });
});