let events = require("events");
const { EventEmitter } = require("stream");
// return the class of EventEmmiter
let EventEmiter = events.EventEmitter;
console.log(typeof typeof EventEmiter);
// instance of EventEmiter
let eventEmiter = new EventEmiter();
// punlishing the event
eventEmiter.on("test", () => {
  console.log("test event executed");
});
eventEmiter.on("test", () => {
  console.log("test event executed");
});
// subscribe to the event
// it will excute all the event of same name
eventEmiter.emit("test");
// eventEmiter.emit('test')
// once only can emit or publish
eventEmiter.once("add", (a, b) => {
  console.log("add", a + b);
});
let eventNames = eventEmiter.eventNames();
console.log("eventNames", eventNames);
eventEmiter.emit("add", 10, 20);
eventEmiter.emit("add", 10, 20);
// second event
let eventEmiter2 = new EventEmiter();
eventEmiter2.on("print", () => {
  console.log("print Executed");
});

let eventNames2 = eventEmiter2.eventNames();
console.log("eventName2", eventNames2);
eventEmiter2.emit("print");
