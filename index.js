import fs from "fs";

// fs.writeFile("message.txt", "This is a file I have created using Node module on ESM import format!", (err) => {
//    if (err) {
//       throw err;
//    }
//    console.log("The file has been created successfully!");
// })

fs.readFile("./message.txt", (err, data) => {
   if (err) {
      throw err;
   }
   console.log(data.toString());
})