// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

//event listener
// myEmitter.on('myEvent', () => {  
//     console.log('An event occurred!');
// });

// myEmitter.emit("myEvent")

// myEmitter.on('event', (msg) => {  
//     console.log('An event occurred!');
//     console.log(msg)
// });

// myEmitter.emit("event","My event message")

//publish before emit---sync async--multiple emit single event---mutliple listener single emit
///
// import { EventEmitter } from 'events';
// const eventEmitter = new EventEmitter();

// eventEmitter.on('myEvent', (data) => {
//     console.log(data);
// });

// eventEmitter.on('myEvent2', (data) => {
//     console.log(data);
// });

// console.log('Statement A');
// eventEmitter.emit('myEvent', 'Statement B');
// eventEmitter.emit('myEvent', 'Statement Be');
// eventEmitter.emit('myEvent2', 'Statement Be');

// console.log("Statement C");


//// depends on order the listeners are registered
import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (data) => {
    console.log(data, '- FIRST');
});

console.log('Statement A');

eventEmitter.on("myEvent", data => {
    console.log(data, '- SECOND');
});

eventEmitter.emit('myEvent', 'Emitted Statement');

console.log("Statement B");