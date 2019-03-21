const EventEmitter = require("events");

// Create class

class MyEmitter extends EventEmitter { }

// Init
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('event fired'));

// Init event 
myEmitter.emit('event');
myEmitter.emit('event');
