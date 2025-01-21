const fs = require("fs").promises;

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(error.message);
  }
}

deleteFile("myFirstFile.txt");
