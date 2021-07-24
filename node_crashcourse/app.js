const fs = require('fs');
const path = require('path');
const os = require('os');
const inquirer = require('inquirer');

// async
// run later
console.log('heyayaa')

// const car = {
//     colour: 'blue',
//     brand: 'toyota',
//     drive: function(){
//         // ..
//     }
// }

// const colour = car.colour;
// const brand = car.brand;

// const {brand, colour} = car;





inquirer.prompt([
    {
        type: 'input',
        name: 'food', // key of the answer object
        message: "What is your favourite food?"
    }
]).then((answers) => {

    console.log(answers);

})

// GUI -- graphical user interface


// command line interface













// sync
// run on the spot

// read
// console.log(__dirname);



// console.log(os.freemem());

// const textPath = path.join(__dirname, 'output', 'text.md')

// const file = fs.readFileSync(textPath, 'utf-8');

// console.log(file);

// const content = '\n# HIAHIHAIHIDAWI';

// // fs.writeFileSync(textPath, content);
// fs.appendFileSync(textPath, content);

// write

// append



// npm -- node package manager


