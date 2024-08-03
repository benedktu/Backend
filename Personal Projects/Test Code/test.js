import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message" : "what is your name?",
      "name": "userName"
    },
    {
      "message" : "what is your age?",
      "name": "userAge"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(`Hello, my name is ${answers.userName}! and my age is ${answers.userAge}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  


