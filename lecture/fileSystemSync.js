const { log } = require("console");
const fs = require("fs");
fs.writeFileSync("file1.txt", "this is content");

fs.appendFileSync("file1.txt", " and this is appended data");

let data = fs.readFileSync("file1.txt", "utf-8"); //encoding technique to format buffer value to string

// let actual_data = data.toString();     way to convert buffer data to string

console.log(data);
// console.log(actual_data);

fs.renameSync("file1.txt", "newfilename.txt");
