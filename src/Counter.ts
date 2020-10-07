import {EventEmitter} from "events";

// in JS it would be "util.inherits(Counter, EventEmitter)"
export class Counter extends EventEmitter {

    constructor(private _count: number) {
        super();
    }

    public increment() {
        this._count++;
        this.emit('incremented', this._count);
    }

    public handleEmit(emittedValue: number): void {
        console.log(emittedValue);
    }
}