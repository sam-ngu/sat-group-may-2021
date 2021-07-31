const Engineer = require("./../../src/employees/Engineer");

function makeEngineer(
    id = 123,
    email = "Engineer@mail.com",
    name = "hungry jacks",
    github='kfc'
) {
    return new Engineer(id, email, name, github);
}

describe("Test Engineer", () => {
    it("should contain the correct field", () => {
        // replicate the env
        // define the source of truth
        const id = 123;
        const email = "Engineer@mail.com";
        const name = "hungry jacks";
        const github = "kfc123";

        const engineer = makeEngineer(id, email, name, github);

        // compare the result / test
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.name).toEqual(name);
        expect(engineer.github).toEqual(github);
    });

    it("should return Engineer when getRole() is called", () => {
        const Engineer = makeEngineer();
        const expected = "Engineer";
        expect(Engineer.getRole()).toEqual(expected);
    });

    it("should return email when getEmail() is called", () => {
        const expected = "Engineer@mail.com.aaa";
        const Engineer = makeEngineer(123, expected);
        expect(Engineer.getEmail()).toEqual(expected);
    });

    it("should return Engineer when getName() is called", () => {
        const expected = "McDonalds";
        const Engineer = makeEngineer(123, "dwadaw@dawdwa.a", expected);
        expect(Engineer.getName()).toEqual(expected);
    });

    it("should return Engineer when getId() is called", () => {
        const expected = 123;
        const Engineer = makeEngineer(expected);
        expect(Engineer.getId()).toEqual(expected);
    });
});
