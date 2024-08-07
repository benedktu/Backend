import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const formInput = req.body;
  console.log(formInput);
  const data = JSON.stringify(formInput);

  writeFile('formInput.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
