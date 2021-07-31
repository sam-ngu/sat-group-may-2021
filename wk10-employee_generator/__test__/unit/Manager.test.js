const Manager = require("./../../src/employees/Manager");

function makeManager(
    id = 123,
    email = "Manager@mail.com",
    name = "hungry jacks",
    officeNumber = "kfc"
) {
    return new Manager(id, email, name, officeNumber);
}

describe("Test Manager", () => {
    it("should contain the correct field", () => {
        // replicate the env
        // define the source of truth
        const id = 123;
        const email = "Manager@mail.com";
        const name = "hungry jacks";
        const officeNumber = "kfc123";

        const intern = makeManager(id, email, name, officeNumber);

        // compare the result / test
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.name).toEqual(name);
        expect(intern.officeNumber).toEqual(officeNumber);
    });

    it("should return Manager when getRole() is called", () => {
        const Manager = makeManager();
        const expected = "Manager";
        expect(Manager.getRole()).toEqual(expected);
    });

    it("should return email when getEmail() is called", () => {
        const expected = "Manager@mail.com.aaa";
        const Manager = makeManager(123, expected);
        expect(Manager.getEmail()).toEqual(expected);
    });

    it("should return Manager when getName() is called", () => {
        const expected = "McDonalds";
        const Manager = makeManager(123, "dwadaw@dawdwa.a", expected);
        expect(Manager.getName()).toEqual(expected);
    });

    it("should return Manager when getId() is called", () => {
        const expected = 123;
        const Manager = makeManager(expected);
        expect(Manager.getId()).toEqual(expected);
    });
});
