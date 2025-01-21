// const { readFile } = require('fs/promises');

//asynchronous fs with promises (introduced after popularity of promises) promise-based APIs
const fs = require('fs').promises;

async function readFile(path){
  try {
    const data = await fs.readFile(path)
    console.log(data.toString())
  } catch (error) {
    console.log(error)
  }
}

readFile("myFirstFile.txt")





async function readFiles(filePath) {
    try {
      const data = await fs.readFile(filePath);
      console.log(data)
      console.log("File Data----",data.toString()); //data is a buffer fs.readFile() returns a buffer object by default
    } catch (error) {
      console.error(error.message);
    }
  }

// readFiles("students.csv")

//fs with callback (first introduced)  use the callback and sync APIs
// const fs = require("fs");

// fs.readFile("./built-in-modules/fs-module.txt", "utf8", (err, data) => {
//   if (err) throw err.message;
//   console.log("File Data----", data.toString());
// });
