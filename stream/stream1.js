import { createReadStream } from "fs";

const readStream = createReadStream("./data.txt");

readStream.on("open", () => {
    console.log("Started Reading...");
});

readStream.on("end", () => {
    console.log("Completed Reading...");
});

readStream.on("data", chunk => {
    console.log("-----------------------------------------");
    console.log(chunk.toString());
    console.log("-----------------------------------------");
});


// if data.txt is a large text file then 
// Started Reading...
// Chunk: 1
// ----------------------------------------------------------
// <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... >
// Chunk: 2
// ----------------------------------------------------------
// <Buffer 74 20 6e 75 6e 63 20 76 69 74 61 65 20 66 65 72 6d 65 6e 74 75 6d 2e 20 49 6e 20 75 74 20 61 72 63 75 20 74 65 6d 70 6f 72 2c 20 66 61 75 63 69 62 75 ... >
// Chunk: 3
// ----------------------------------------------------------
// <Buffer 20 76 69 74 61 65 2c 20 65 67 65 73 74 61 73 20 69 64 20 73 65 6d 2e 20 44 6f 6e 65 63 20 75 74 20 75 6c 74 72 69 63 69 65 73 20 6c 6f 72 65 6d 2c 20 ... >
// Completed Reading...

// Notice here the listeners are called internally by NodeJS.
//  We don't need to call the listeners explicitly as NodeJS internally extends event emitters, 
// exposes custom predefined events (data, open, end), and raises these events automatically when required for the streams.

// In the data listener, the buffer gets printed instead of the string since NodeJS, 
// instead of reading the text content of the file, actually reads the file as a buffer.