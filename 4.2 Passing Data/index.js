import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
  
  const htmlContent = {
    preSubmitMessage: "Write your name here:",
    postSubmitMessage: `Hello, There are ${fullNameLength} characters in your name.`,
    concactenateNames: function() { 
      const fullName = formInput.fName + formInput.lName;
      const fullNameLength = fullName.length;
      return fullNameLength;
    }
  }

});

app.post("/submit", (req, res) => {
  const formInput = req.body;
  console.log(formInput);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
