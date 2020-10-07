import {Counter} from "./src/Counter";
import {Reader} from "./src/Reader";

console.log("########## Event Emitter Sample ##########");
const counter = new Counter(1);
counter.addListener('incremented', counter.handleEmit);
counter.increment();
counter.increment();
console.log("########## Event Emitter Finished ########## \n");


console.log("########## Stream Reader Sample ##########");
const reader = new Reader();
reader.setEncoding("utf8");
reader.on("data", reader.onNewStreamChunk)
reader.on("end", () => {
    console.log("########## Stream Reader Finished ########## \n");
});
console.log("Stream reader processing asynchronously, program executes further");