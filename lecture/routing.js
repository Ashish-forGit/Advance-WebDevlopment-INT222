const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("welcome to the index page")
    }else if(req.url == '/emp'){
        res.end("Welcome to emp page")
    }
    else{
        res.end("invalid request of the user")
    }
})

server.listen(1000);
console.log("server is running at port 1000")