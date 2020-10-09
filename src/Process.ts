import {ChildProcessWithoutNullStreams, spawn, SpawnOptionsWithoutStdio} from 'child_process';
import {Readable} from "stream";

export class Process extends Readable {
    private process: ChildProcessWithoutNullStreams;

    constructor() {
        super();
    }

    public spawnProcess(command: string, options?: SpawnOptionsWithoutStdio): void {
        this.process = spawn(command, options);
        console.log(`Process ${this.process.pid} has started`);
        this.process.stdout.on("readable", this.handleProcessOutput);
        this.process.on("close", this.handleProcessFinish)
    }

    private handleProcessOutput(): void {
        const outputBuffer: any = this.read();
        outputBuffer && console.log("Received spawn output", outputBuffer.toString());
    }

    private handleProcessFinish(): void {
        console.log(`Process has finished`);
    }
}