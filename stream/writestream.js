
// A writable stream is a stream of data that is created to write some streaming data.
import { createWriteStream } from 'fs';

//creates dump.txt file
const writeStream = createWriteStream('./dump.txt');

//we need to call write function of writeStream to write data
writeStream.write('hello\n');
writeStream.write('world\n');