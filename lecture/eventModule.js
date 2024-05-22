
const { log } = require('console')
const eventEmitter = require('events');
const { endianness } = require('os');
const { start } = require('repl');
const event = new eventEmitter() // object 
event.on("start",  (number)=>{
    console.log("event triggered", number);
})

event.emit("start",23);

//multiple arguments 
event.on("start2", (starts, ends) => {
    console.log(`started from ${starts} to ${ends}`);
});

event.emit("start2", 1, 100);



