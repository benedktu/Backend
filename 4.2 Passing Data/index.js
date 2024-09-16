import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const preMessage = "Write your name here:";

app.get("/", (req, res) => {
     const preMessage = "Write your name here:";
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const formInput = req.body;
  const fullName = formInput["fName"] + formInput["lName"];
  const fullNameLength = fullName.length;
  const postMessage = `Hello ${formInput["fName"]}, there are ${fullNameLength} characters in your name.`;

  res.render("index.ejs", {
    preMessage,     
    postMessage,
    fullNameLength,
  });

  console.log(fullNameLength);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
