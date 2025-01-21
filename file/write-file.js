// console.log(`Module type: ${import.meta.url ? "ESM" : "CommonJS"}`);
const fs = require("fs").promises;

//create a file and add headers

async function openFile(){
  try {
    await fs.writeFile("myFirstFile.txt","My first file content")
  } catch (error) {
    console.log(error)
  }
}

openFile()
// // async function openFile() {
//   try {
//     const csvHeaders = "name,email,rollNo";
//     await fs.writeFile("students.csv", csvHeaders);
//   } catch (error) {
//     console.error(`Got an error trying to write to a file: ${error.message}`);
//   }
// }

//append data to the created file
// async function addStudents(student) {
//   try {
//     const csvLine = `\n${student.name},${student.email},${student.rollNo}`;
//     await fs.writeFile("students.csv", csvLine, { flag: "a" }); //flag and options see docs
//   } catch (error) {
//     console.error(`Got an error trying to write to a file: ${error.message}`);
//   }
// }

// const students = [
//   { name: "Alice Johnson", email: "alice.johnson@example.com", rollNo: 101 },
//   { name: "Bob Smith", email: "bob.smith@example.com", rollNo: 102 },
//   { name: "Charlie Brown", email: "charlie.brown@example.com", rollNo: 103 },
//   { name: "David Wilson", email: "david.wilson@example.com", rollNo: 104 },
//   { name: "Eva Davis", email: "eva.davis@example.com", rollNo: 105 },
//   { name: "Frank Miller", email: "frank.miller@example.com", rollNo: 106 },
//   { name: "Grace Lee", email: "grace.lee@example.com", rollNo: 107 },
//   { name: "Hannah Clark", email: "hannah.clark@example.com", rollNo: 108 },
//   { name: "Ian Turner", email: "ian.turner@example.com", rollNo: 109 },
//   { name: "Jane Parker", email: "jane.parker@example.com", rollNo: 110 },
// ];


// (async function(){

//   for (const student of students) {
//       await addStudents(student);
//     }
// })()

// (async function () {
//   await openFile();
  
// })();
