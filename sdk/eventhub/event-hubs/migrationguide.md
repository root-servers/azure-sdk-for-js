# Guide to migrate from @azure/event-hubs v2 to v5

This document is intended for users that are familiar with V2 of the JavaScript SDK for Event Hubs library (`@azure/event-hubs@2.x.x` & `@azure/event-processor-host@2.x.x`) and wish
to migrate their application to V5 of the same library.

For users new to the JavaScript SDK for Event Hubs, please see the [readme file for the @azure/event-hubs package](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/README.md).

## General changes

Version 5 of the `@azure/event-hubs` package is a result of our efforts to
create a client library that is user-friendly and idiomatic to the JavaScript
ecosystem.

Apart from redesigns resulting from the new [Azure SDK Design Guidelines for Typescript](https://azure.github.io/azure-sdk/typescript_introduction.html#design-principles),
the latest version improves on several areas from V2:

### Handling backpressure

Prior to V5, events were delivered as they were received with no ability
for the user to control the pace. This could result in flooding of downstream
dependencies as well as confusion about which events had been consumed in
what order, making checkpointing difficult to do correctly.

In V5 the model has been simplified so new events are not delivered until the
previous batch has been consumed by your event handler. You can see a sample
demonstrating this [here](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/receiveEvents.ts)

### Specific clients for sending vs receiving

In V5 we've simplified the API surface, making two distinct clients, rather
than having a single `EventHubClient`:

- [EventHubProducerClient](https://docs.microsoft.com/en-us/javascript/api/@azure/event-hubs/eventhubproducerclient)
  for sending messages.
- [EventHubConsumerClient](https://docs.microsoft.com/en-us/javascript/api/@azure/event-hubs/eventhubconsumerclient)
  for receiving messages.

We've also merged the functionality from `EventProcessorHost` from the `@azure/event-processor-host` package into
`EventHubConsumerClient` in the `@azure/event-hubs` package, allowing `EventHubConsumerClient` to be the single
point of entry for receiving of any type (from single partition, all partitions, or with load balancing and checkpointing features) within Event Hubs.

Important note on checkpoints: `EventHubConsumerClient` does not support legacy checkpoint data.
i.e. the checkpoints made using the package `@azure/event-processor-host`.
In order to support interopability between different programming languages, a unifying checkpoint format was needed.
This and the need to support improvements to the algorithm used for managing partition ownership made breaking changes necessary.

### Granular control over retries

Retry logic and tuning has been externalized, allowing for better configuration
to better suit your network configuration and reliability.

More information about configuring and tuning retries can be found [here](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/eventhub/event-hubs#guidance-around-retries).

### Unified logging and diagnostics

With V5 we've unified the Azure SDK logging to work in a uniform way, making
troubleshooting simpler.

Documentation for enabling logging in EventHubs is [here](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/eventhub/event-hubs#enable-logs).

### Client constructors

| In v2                                             | Equivalent in v5                                                 | Sample                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `EventHubClient.createFromConnectionString()`     | `new EventHubProducerClient()` or `new EventHubConsumerClient()` | [receiveEvents](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/receiveEvents.ts), [sendEvents](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/sendEvents.ts) |
| `EventHubClient.createFromAadTokenCredentials()`  | `new EventHubProducerClient()` or `new EventHubConsumerClient()` | [usingAadAuth](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/usingAadAuth.ts)                                                                                                                                     |
| `EventProcessorHost.createFromConnectionString()` | `new EventHubConsumerClient(..., checkpointStore)`               | [receiveEventsUsingCheckpointStore](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/eventhubs-checkpointstore-blob/samples/typescript/src/receiveEventsUsingCheckpointStore.ts)                                                                       |

Other noteworthy changes:

- In v5, the `EventHubConsumerClient` class takes the consumer group name as a mandatory argument in its constructor.
  If you havent created any consumer groups explicitly, then use the name of the default consumer group which is `$Default`.
- For a checkpoint store implementation using Azure Storage Blobs, use the
  [@azure/eventhubs-checkpointstore-blob](https://www.npmjs.com/package/@azure/eventhubs-checkpointstore-blob) package.

### Receiving events

| In v2                                                          | Equivalent in v5                     | Sample                                                                                                                                 |
| -------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `EventHubClient.receive()` and `EventHubClient.receiveBatch()` | `EventHubConsumerClient.subscribe()` | [receiveEvents](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/receiveEvents.ts) |

Other noteworthy changes:

- Use the `options` parameter to the `subscribe()` method to specify starting position to receive events from.
- The `subscribe()` method allows you to receive events in batches whose size can be configured using the `options` parameter.
- The user provided `processEvents` function to process events will be invoked only after the previous invocation completes.
  This is different from v2 where the function was invoked for each event without waiting for the previous call to complete.

### Sending events

| In v2                              | Equivalent in v5                               | Sample                                                                                                                           |
| ---------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `EventHubClient.sendBatch(events)` | `EventHubProducerClient.sendBatch(eventBatch)` | [sendEvents](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/sendEvents.ts) |

Other noteworthy changes:

- The `send` method on the client is deprecated in favor of the `sendBatch` to encourage sending
  events in batches for better throughput.
- The `sendBatch` method on the client takes a object of type `EventDataBatch` that should be created
  using the `createBatch` method on the client.

### Creating EventPosition

| In v2                                     | Equivalent in v5            |
| ----------------------------------------- | --------------------------- |
| `EventPosition.fromStart()`               | `earliestEventPosition`     |
| `EventPosition.fromEnd()`                 | `latestEventPosition`       |
| `EventPosition.fromOffset(value)`         | `{ offset: value }`         |
| `EventPosition.fromSequenceNumber(value)` | `{ sequenceNumber: value }` |
| `EventPosition.fromEnqueuedTime(value)`   | `{ enqueuedOn: value }`     |

### Handling errors

- In v2, the `name` property on an error of class `MessagingError` was used to reflect the different
  error types like `InternalServerError`, `ServiceUnavailableError`, `OperationTimeoutError` etc. In v5,
  the `name` property will always have the value "MessagingError". The new `code` property will contain
  the different error types instead.
- In v2, network related system errors with `code` ENOTFOUND, ECONNREFUSED were passed to the user after
  getting converted to a `MessagingError` with custom names. In v5, such errors will retain their `code`.
- In v2, when receiving events, after calling the user-provided error callback, the `receive()` method
  would stop receiving events and the user was expected to call it again.
  In v5, after calling the user-provided error callback, the `subscribe()` method will resume receiving
  events from the last checkpointed position.

## Migration samples

- [Receiving events](#migrating-code-from-eventhubclient-to-eventhubconsumerclient-for-receiving-events)
- [Receiving events with checkpointing](#migrating-code-from-eventprocessorhost-to-eventhubconsumerclient-for-receiving-events)
- [Sending events](#migrating-code-from-eventhubclient-to-eventhubproducerclient-for-sending-events)

### Migrating code from `EventHubClient` to `EventHubConsumerClient` for receiving events

In V2, event handlers were passed as positional arguments to `receive`.

In V5, event handlers are passed as part of a `SubscriptionEventHandlers` shaped object.

For example, this code which receives from a partition in V2:

```typescript
const client = EventHubClient.createFromConnectionString(connectionString);
const rcvHandler = client.receive(partitionId, onMessageHandler, onErrorHandler, {
  eventPosition: EventPosition.fromStart(),
  consumerGroup: consumerGroupName
});
await rcvHandler.stop();
```

Becomes this in V5:

```typescript
const eventHubConsumerClient = new EventHubConsumerClient(consumerGroupName, connectionString);

const subscription = eventHubConsumerClient.subscribe(partitionId, {
  processInitialize: (initContext) => {
    initContext.setStartingPosition(earliestEventPosition);
  },
  processEvents: onMessageHandler,
  processError: onErrorHandler
});

await subscription.close();
```

See [`receiveEvents.ts`](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventhub/event-hubs/samples/typescript/src/receiveEvents.ts)
for a sample program demonstrating this.

### Migrating code from `EventHubClient` to `EventHubProducerClient` for sending events

In V2, there were multiple options on how to send data.

In V5, this has been consolidated into a more efficient `sendBatch` method.
Batching merges information from multiple messages into a single send, reducing
the amount of network communication needed vs sending messages one at a time.

So in V2:

```typescript
const eventsToSend = [
  // events go here
];

const client = EventHubClient.createFromConnectionString(connectionString);

// Would fail if the total size of events exceed the max size supported by the library.
await client.sendBatch(eventsToSend, partitionId);
```

In V5:

```typescript
const producer = new EventHubProducerClient(connectionString);

const eventsToSend = [
  // events go here
];

let batch = await producer.createBatch();
let i = 0;

while (i < eventsToSend.length) {
  // messages can fail to be added to the batch if they exceed the maximum size configured for
  // the EventHub.
  const isAdded = batch.tryAdd(eventsToSend[i]);

  if (isAdded) {
    console.log(`Added event number ${i} to the batch`);
    ++i;
    continue;
  }

  if (batch.count === 0) {
    // If we can't add it and the batch is empty that means the message we're trying to send
    // is too large, even when it would be the _only_ message in the batch.
    //
    // At this point you'll need to decide if you're okay with skipping this message entirely
    // or find some way to shrink it.
    console.log(`Message was too large and can't be sent until it's made smaller. Skipping...`);
    ++i;
    continue;
  }

  // otherwise this just signals a good spot to send our batch
  console.log(`Batch is full - sending ${batch.count} messages as a single batch.`);
  await producer.sendBatch(batch);

  // and create a new one to house the next set of messages
  batch = await producer.createBatch();
}

// send any remaining messages, if any.
if (batch.count > 0) {
  console.log(`Sending remaining ${batch.count} messages as a single batch.`);
  await producer.sendBatch(batch);
}
```

### Migrating code from `EventProcessorHost` to `EventHubConsumerClient` for receiving events

In V2, `EventProcessorHost` allowed you to balance the load between multiple instances of
your program when receiving events.

In V5, `EventHubConsumerClient` allows you to do the same with the `subscribe()` method if you
pass a `CheckpointStore` to the constructor.

So in V2:

```typescript
const eph = EventProcessorHost.createFromConnectionString(
  EventProcessorHost.createHostName(ephName),
  storageConnectionString,
  storageContainerName,
  ehConnectionString,
  {
    eventHubPath: eventHubName,
    onEphError: (error) => {
      // This is your error handler for errors occuring during load balancing.
      console.log("Error when running EPH: %O", error);
    }
  }
);

// In V2, you get a single event passed to your callback. If you had asynchronous code running in your callback,
// it is not awaited before the callback is called for the next event.
const onMessage = (context, event) => {
  /** your code here **/
};

// This is your error handler for errors occuring when receiving events.
const onError = (error) => {
  console.log("Received Error: %O", error);
};

await eph.start(onMessage, onError);
```

And in V5:

```typescript
import { EventHubConsumerClient, CheckpointStore } from "@azure/event-hubs";
import { ContainerClient } from "@azure/storage-blob";
import { BlobCheckpointStore } from "@azure/eventhubs-checkpointstore-blob";

const containerClient = new ContainerClient(storageConnectionString, storageContainerName);
const checkpointStore: CheckpointStore = new BlobCheckpointStore(containerClient);
const eventHubConsumerClient = new EventHubConsumerClient(
  consumerGroupName,
  ehConnectionString,
  eventHubName
);

const subscription = eventHubConsumerClient.subscribe(partitionId, {
  // In V5 we deliver events in batches, rather than a single message at a time.
  // You can control the batch size via the options passed to the client.
  //
  // If your callback is an async function or returns a promise, it will be awaited before the
  // callback is called for the next batch of events.
  processEvents: (events, context) => {
    /** your code here **/
  },

  // Prior to V5, errors were handled by separate callbacks depending
  // on where they were thrown i.e when managing different partitions vs receiving from each partition.
  //
  // In V5, you only need a single error handler for all of those cases.
  processError: (error, context) => {
    if (context.partitionId) {
      console.log("Error when receiving events from partition %s: %O", context.partitionId, error);
    } else {
      console.log("Error from the consumer client: %O", error);
    }
  }
});

await subscription.close();
```

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Feventhub%2Fevent-hubs%2FMIGRATIONGUIDE.png)
