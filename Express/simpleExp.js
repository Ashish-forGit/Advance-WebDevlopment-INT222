
const express = require('express')

const appp = express()

const port = 3000;

appp.get('/',(req,res)=>{
    res.send('Hello World')
})

appp.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})