const fs = require("fs")

const readableStream = fs.createReadStream("example.txt",'utf-8')
readableStream.on('data', (chunk)=>{
    console.log("received chunk of data");
    console.log(chunk);
})

readableStream.on('end' , ()=>{
    console.log("Finished reading the file");
})

readableStream.on('error', ()=>{
    console.log('error occured',error);
})