const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("it will bring the employee given info", () => {
        it("should get the name given", () => {
            const nameOf = new Employee();
            expect(typeof (nameOf)).toEqual("object");
        });
    });
    describe("Set the Name", () => {
        it("should get the id given", () => {
            const name = "Tolga";
            const example = new Employee(name);
            expect(example.name).toEqual(name);
        });
    });
    describe("Set the Id", () => {
        it("should get the id given", () => {
            const id = 21;
            const example = new Employee("Tolga", id);
            expect(example.id).toEqual(id);
        });
    });
    describe("Set the Email", () => {
        it("should get the email given", () => {
            const mail = "tolgasecme@icloud.com";
            const example = new Employee("Tolga", 21, mail);
            expect(example.email).toEqual(mail);
        });
    });
    describe("getName()", () => {
        it("should get the id given", () => {
            const name = "Tolga";
            const example = new Employee(name);
            expect(example.getName()).toEqual(name);
        });
    });
    describe("getId()", () => {
        it("should get the id given", () => {
            const id = 21;
            const example = new Employee("Tolga", id);
            expect(example.getId()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should get the email given", () => {
            const mail = "tolgasecme@icloud.com";
            const example = new Employee("Tolga", 21, mail);
            expect(example.getEmail()).toEqual(mail);
        });
    });
    describe("getRole()", () => {
        it("should return-'Employee'", () => {
            const role = "Employee";
            const example = new Employee("Tolga", 21, "tolgasecme@icloud.com");
            expect(example.getRole()).toEqual(role);
        });
    });
});