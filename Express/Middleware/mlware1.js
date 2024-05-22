const express = require('express');
const app = express();

 //middleware function
app.use((req, res, next) => {
    console.log('this is middleware function');
    next();
});



app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})