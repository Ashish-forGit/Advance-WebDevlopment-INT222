var eventEmitter=require('events')
const { EventEmitter } = require('stream');
const event1 = new EventEmitter();

// Example of using setInterval
const intervalId = setInterval(() => {
  console.log('This message will be printed every second');
}, 1000);

// Example of using setImmediate
setImmediate(() => {
  console.log('This message will be printed as soon as possible, after any I/O events have been processed');
});

// Stop the interval after a few seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
