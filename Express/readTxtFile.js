const express = require('express')
const fs = require("fs");
const app = express();
const port=6600

// app.get('/readjson',(req,res)=>
// {
//   fs.readFile('./new.json','utf-8' ,(err,re)=>
//       {
//         if(err)
//         res.send('error');
//         else res.send(re);
//       })s
// })





app.get("/readfile",(req,res)=>
{
    fs.readFile("example.txt","utf-8",(err,data)=> {
        if (err)
        {
            res.send("error")
        }
        else {
            res.send(data)
        }
    })
    fs.appendFile("example.txt","this is the data to be appended to this file",(err)=>
    {
        console.log("Data has been appended")
    })
})
    app.listen(port,()=>{
        console.log("server is running on port 3000");
     } )

