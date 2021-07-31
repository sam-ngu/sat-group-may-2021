const BaseEmployee = require("./../../src/employees/BaseEmployee");

function makeEmployee(
    id = 123,
    email = "employee@mail.com",
    name = "hungry jacks"
) {
    return new BaseEmployee(id, email, name);
}

describe("Test Base Employee", () => {
    it("should contain the correct field", () => {
        // replicate the env
        // define the source of truth
        const id = 123;
        const email = "employee@mail.com";
        const name = "hungry jacks";

        const employee = makeEmployee(id, email, name);

        // compare the result / test
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
        expect(employee.name).toEqual(name);

        // `getName()`
        // `getId()`
        // `getEmail()`
        // `getRole()`
    });

    it("should return Employee when getRole() is called", () => {

        const employee = makeEmployee();
        const expected = "Employee";
        expect(employee.getRole()).toEqual(expected);
    });

    it("should return email when getEmail() is called", () => {
        
        const expected = "employee@mail.com.aaa";
        const employee = makeEmployee(123, expected);
        expect(employee.getEmail()).toEqual(expected);
    });

    it("should return Employee when getName() is called", () => {

        const expected = "McDonalds";
        const employee = makeEmployee(123, "dwadaw@dawdwa.a", expected);
        expect(employee.getName()).toEqual(expected);
    });

    it("should return Employee when getId() is called", () => {
        const expected = 123;
        const employee = makeEmployee(expected);
        expect(employee.getId()).toEqual(expected);
    });
});
