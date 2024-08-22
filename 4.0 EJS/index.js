import express from "express";

const app = express();
const port = 6969;


const today = new Date();
const day = today.getDay();

let typ = "a weekday";
let adv = "it's time to put in the work!";

if (today === 0 || today === 6) {
    typ = "the weekend";
    adv = "it's time to chill out!";
}

app.get("/", (req, res) => {
    res.render("index.ejs", { 
        day_type: typ,
        day_advice: adv
     });
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`);
});