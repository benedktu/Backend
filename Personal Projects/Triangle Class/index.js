// import inqurer from "inquirer";


// class Triangle {
//   constructor(base, height) {
//     this.base = base;
//     this.height = height;
//   }

//   // Get Area
//   get area() {
//     return this.calcArea();
//   }

//   //  Method
//   calcArea() {
//     return (this.base / 2) * this.height;
//   }
// }

// // Receive user dimensions
// const userBase = prompt("what is the base?");
// const userHeight = prompt("what is the triangle height?");


// // Output Area of Triangle
// const output = new Triangle(userBase, userHeight);
// console.log(`${output.area} square`); // can also be: console.log(`${output.calcArea()} square`); 

import inquirer from "inquirer";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "what is your name?", 
      name: "userName" },
    {
      message: "what is your age?",
      age: "userAge",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(
      `Hello, my name is ${answers.userName}! and my age is ${answers.userAge}`
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  


