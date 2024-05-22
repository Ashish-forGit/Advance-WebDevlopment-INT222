
const { log } = require("console");
const fs = require("fs");
 fs.writeFile("fsAsync.txt","i am data in async file", (err)=>{
    console.log("file is created");
    if(err)console.log(err);
 })

 fs.appendFile("fsAsync.txt","hello ia am added",(err)=>{
    console.log("task completed");
 })

fs.readFile("fsAsync.txt","utf-8",(err,res)=>{

    if(err)console.log(err);
    else console.log(res);
 })

 fs.rename("fsAsync.txt","renamedAsynscFile.txt",(err,res)=>{
    console.log("file renamed successfully");
 })

 



