const Intern = require("./../../src/employees/Intern");

function makeIntern(
    id = 123,
    email = "Intern@mail.com",
    name = "hungry jacks",
    school = "kfc"
) {
    return new Intern(id, email, name, school);
}

describe("Test Intern", () => {
    it("should contain the correct field", () => {
        // replicate the env
        // define the source of truth
        const id = 123;
        const email = "Intern@mail.com";
        const name = "hungry jacks";
        const school = "kfc123";

        const intern = makeIntern(id, email, name, school);

        // compare the result / test
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.name).toEqual(name);
        expect(intern.school).toEqual(school);
    });

    it("should return Intern when getRole() is called", () => {
        const Intern = makeIntern();
        const expected = "Intern";
        expect(Intern.getRole()).toEqual(expected);
    });

    it("should return email when getEmail() is called", () => {
        const expected = "Intern@mail.com.aaa";
        const Intern = makeIntern(123, expected);
        expect(Intern.getEmail()).toEqual(expected);
    });

    it("should return Intern when getName() is called", () => {
        const expected = "McDonalds";
        const Intern = makeIntern(123, "dwadaw@dawdwa.a", expected);
        expect(Intern.getName()).toEqual(expected);
    });

    it("should return Intern when getId() is called", () => {
        const expected = 123;
        const Intern = makeIntern(expected);
        expect(Intern.getId()).toEqual(expected);
    });
});
