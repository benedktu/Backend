import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(htmlContent);

app.get("/", (req, res) => {
  const htmlContent = {
    preSubmitMessage: "Write your name here:",
    postSubmitMessage: `Hello ${formInput.fName}, There are ${fullNameLength} characters in your name.`,
    concactenateNames: function(req, res, next) { 
      const fullName = formInput.fName + formInput.lName;
      const fullNameLength = fullName.length;
      return fullNameLength;
    }
  }

  res.render( "index.ejs");

});

app.post("/submit", (req, res) => {
  const formInput = req.body;
  console.log(formInput);
  console.log(formInput.fName);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
