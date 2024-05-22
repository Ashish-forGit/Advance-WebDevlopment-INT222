
const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // __dirname represents the current directory
});

app.post('/submit', (req,res) =>{
    console.log(req.body);
    let data = JSON.stringify(req.body);
    const writeStream = fs.createWriteStream('body.json');
    writeStream.write(data);
    writeStream.end();
    res.end(data);
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})