const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');

const fileEventEmitter = new EventEmitter();

const server = http.createServer((req, res) => {
    const writeStream = fs.createWriteStream('stream.txt');
    const abc = "hello world";
    writeStream.write(abc);

    const readableStream = fs.createReadStream("stream.txt", 'utf-8');

    readableStream.on('data', (chunk) => {
        console.log("Received chunk of data");
        console.log(chunk);
        res.end(chunk);
    });

    readableStream.on('end', () => {
        console.log("Finished reading the file");
    });

    readableStream.on('error', (error) => {
        console.log('Error occurred', error);
        
        res.end('Internal Server Error');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Emitting events after some operations
fileEventEmitter.emit('data', 'end', 'error');
