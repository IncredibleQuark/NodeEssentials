import {Counter} from "./src/Counter";
import {Reader} from "./src/Reader";
import {Process} from "./src/Process";

class Main {
    public async main(): Promise<void> {
        this.eventEmitterSample();
        await this.streamReaderSample();
        this.processScalingSample();
    }

    private eventEmitterSample(): void {
        console.log("########## Event Emitter Sample ##########");
        const counter = new Counter(1);
        counter.addListener('incremented', counter.handleEmit);
        counter.increment();
        counter.increment();
        console.log("########## Event Emitter Finished ########## \n");
    }

    private async streamReaderSample(): Promise<void> {
        console.log("########## Stream Reader Sample ##########");
        const reader = new Reader();
        reader.setEncoding("utf8");
        reader.on("data", reader.onNewStreamChunk)
        reader.on("end", reader.onFinishStreamChunk);
        console.log('Stream Reader process further, chunks on event loop');
    }

    private processScalingSample(): void {
        console.log("########## Process Scaling Samples ##########");
        const process1: Process = new Process();
        // commands should rely on operating system // tested on Windows
        process1.spawnProcess("echo hello from process 1", {shell: true});
        process1.spawnProcess("echo hello from process 2", {shell: true});

    }
}

const main: Main = new Main();
main.main();


