//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// DOESN'T USUALLY CHANGE, SHOULDN'T USUALLY CHANGE
const __dirname = dirname(fileURLToPath(import.meta.url)); 
const app = express();
const port = 6969;

let userAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));


function pwChecker(req, res, next) {
    let password = req.body["password"];
    if (password === "eee") {
        userAuthorized = true;
    } 
    next();
}

app.use(pwChecker);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
    if (userAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});