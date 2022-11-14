let events=require('events');
const { eventNames } = require('process');

// let EventEmiter=events.EventEmitter
// to make one line 
let eventEmiter= new events.EventEmitter()
// create function seperately
let product=(a,b)=>{
    console.log("product is :",a*b);
}

eventEmiter.addListener('product',product)

eventEmiter.emit('product',15,2)

// let eventNames=eventEmiter.eventNames()
console.log('eventNames before remove',eventEmiter.eventNames());
// to remove function
eventEmiter.removeListener('product',product)
console.log('eventNames after remove',eventEmiter.eventNames());

let eventEmiter2=new events.EventEmitter()

eventEmiter2.on('myEvent1',product)
eventEmiter2.on('myEvent2',product)

eventEmiter2.emit("myEvent1",10,2)
eventEmiter2.emit("myEvent2",10,4)
console.log('eventNames before remove',eventEmiter2.eventNames());
eventEmiter2.removeAllListeners()
console.log('eventNames after remove',eventEmiter2.eventNames());