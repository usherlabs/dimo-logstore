import {LogStoreClient} from "@logsn/client";
import {StreamrClient} from "streamr-client";
import dotenv from "dotenv";

dotenv.config();

const vehiclesStream = "streams.dimo.eth/vehicles/"
const streamrClient = new StreamrClient({
    auth: {
        privateKey: process.env.PRIVATE_KEY!
    }
});

const logStoreClient = new LogStoreClient(streamrClient);

const messageStream = await logStoreClient.query({
    streamId: vehiclesStream
}, {last: 1}, undefined, {verifyNetworkResponses: false})

for await (const message of messageStream) {
    console.log(message);
}