import {Counter} from "./src/Counter";


// ########## Sample event emitter usage ########## //
console.log("########## Event Emitter Sample ##########");
// instantiate object
const counter = new Counter(1);
// assign callback function on emit action
counter.addListener('incremented', counter.handleEmit);
// call emitter
counter.increment();
counter.increment();
console.log("########## Event Emitter Finished ##########");
