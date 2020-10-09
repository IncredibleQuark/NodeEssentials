import {Readable} from "stream";

export class Reader extends Readable {

    private _counter: number = 0;

    constructor() {
        super();
    }

    public _read(): boolean {
        this._counter++;
        if (this._counter > 5) {
            return this.push(null);
        }
        this.push(this._counter.toString());
    }

    public onNewStreamChunk(chunk: string): void {
        console.log(`Stream received another chunk: ${chunk}`);
    }

    public onFinishStreamChunk(): void {
        console.log("########## Stream Reader Finished ########## \n");
    }
}