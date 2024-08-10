import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

// GET THE FILE PATH FOR THE HTML
const __dirname = dirname(fileURLToPath(import.meta.url)); 

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const userInput = req.body;
  const bandName = userInput.street + userInput.pet;
  console.log(userInput);

  res.send(`<h1>Your Band Name is: </h1><h2>${bandName}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
