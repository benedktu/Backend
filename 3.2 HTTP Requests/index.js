import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("<h1>Main Page</h1>");
});

app.get("/about", (req, res) => {
   res.send("<h1>About Me:</h1><p>My name is Ejike</p>");
});

app.get("/contact", (req, res) => {
   res.send("<h1>Phone:</h1><p>08163505348</p>");
}); 

app.listen(port, ()=> {
   console.log(`server is running on port ${port}`);
})

