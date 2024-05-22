const EventEmitter = require('events');

// Create a new class that extends EventEmitter
class MyEmitter extends EventEmitter {}

// Create an instance of the custom event emitter class
const myEmitter = new MyEmitter();

// Define event handlers
myEmitter.on('greet', () => {
  console.log('Hello, world!');
});

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet');
myEmitter.emit('greet', 'John');
