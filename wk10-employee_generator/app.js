const inquirer = require("inquirer");
const Manager = require("./src/employees/Manager");

const managerQuestions = [
    {
        type: "input",
        name: "id",
        message: "Managers id?",
    },
    {
        type: "input",
        name: "email",
        message: "Managers email?",
    },
    {
        type: "input",
        name: "name",
        message: "Managers name?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Managers office number?",
    },
];

const employees = [];

// ask to add manager

// ask if want to add intern or engineer

// if user selected no,

// generate the output

function askForInternOrEngineer() {
    return inquirer
        .prompt([
            {
                type: "list",
                choices: ["Intern", "Engineer", "No more"],
                name: "answer",
                message: "Do you want to add more ppl?",
            },
        ])
        .then((response) => {
            switch (response.answer) {
                case "No more":
                    // stop the program
                    // render the html

                    break;
                default:
                    askForEmployee(response.answer)
                        .then(() => askForInternOrEngineer());
                    break;
            }
        });
}

function main() {
    return askForEmployee("manager")
        .then((answers) => {
            console.log(answers);

            employees.push(new Manager(...Object.values(answers)));
        })
        .then()
        .catch((err) => {
            console.log(err);
        });
}
main();

function askForEmployee(type = "Manager") {
    const baseQuestions = [
        {
            type: "input",
            name: "id",
            message: `${type}'s id?`,
        },
        {
            type: "input",
            name: "email",
            validate: (userInput) => {
                // check if email is valid
                return true;
            },
            message: `${type}'s email?`,
        },
        {
            type: "input",
            name: "name",
            message: `${type}'s name?`,
        },
    ];

    switch (type.toLowerCase()) {
        case "manager":
            console.log("hayaa");
            baseQuestions.push({
                type: "input",
                name: "officeNumber",
                message: "Managers office number?",
            });
            break;
        // add more switch cases

        default:
            throw new Error("I dont know what you want??!");
    }

    return inquirer.prompt(baseQuestions);
}
