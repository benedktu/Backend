import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 6969;

app.use(bodyParser.urlencoded({ extended: true }));

function daily_message(req, res, next) {
    const date = new Date();
    const day = date.getDay();

    switch (day) {
        case 0:
            res.send('Today is Sunday. Go to church!');
            break;
        case 1:
            res.send('Today is Monday, Go to werk!');
            break;
        case 2:
            res.send('Chewsday innit?');
            break; 
    default: res.send('...');     
    }   
    next();
}

app.use(daily_message);

app.get('/', (req, res) => {
   res(daily_message);
});


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});