import express from "express";

const app = express();
const port = 6969;


function daily_message(req, res, next) {
    const date = new Date();
    const day = date.getDay();

    switch (day) {
        case 0:
            res.send("Today is Sunday. Go to church!");
            break;
        case 1:
            res.send("Today is Monday, Go to werk!");
            break;
        case 2:
            res.send("Chewsday innit?");
            break; 
        case 3:
            res.send("Wedneydayyyy! F-ing Midweek!");
            break;
        case 4:
            res.send("Thursday today. Smells like weekending?");
            break; 
        case 5:
            res.send("Fridayyyy... It is upon usss!");
            break;
        case 6:
            res.send("Satadayyyy! Here we gooo!");
            break; 
    default: res.send("...");     
    }   
    next();
}

app.use(daily_message);

app.get("/", (req, res) => {
       res(daily_message);
});


app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`);
});