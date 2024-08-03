const fs = require("fs");

fs.writeFile("name.txt", "This is a word document that i have created using the node module: writeFile in ES mode.", (err) => {
   if (err) { throw err};
   console.log("file created with some rizz!");

});