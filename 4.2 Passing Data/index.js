import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const preMessage = "Write your name here:";

app.get("/", (req, res) => {
     const preMessage = "Write your name below:";
  res.render("index.ejs",{ preMessage });
});

app.post("/submit", (req, res) => {
     
     const formInput = req.body; // Gets the input from the user and stores it in a variable 'formInput'

     const fullName = formInput["fName"] + formInput["lName"]; // Concatenates the fName and lName string variables based on the user's input, stores it in a variable 
     const fullNameLength = fullName.length; // Gets the length property of the fullName variable
     const postMessage = `Hello ${formInput["fName"]}, there are ${fullNameLength} characters in your name.`;

  res.render("index.ejs", 
     { // Object to hold the generated variables from user input to be rendered via the EJS template         
          preMessage,     
          postMessage,
          fullNameLength,
     });

  console.log(`${fullNameLength} characters`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
