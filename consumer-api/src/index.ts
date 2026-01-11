import { consumer } from "./kafka";

async function startConsumer() {
  await consumer.connect();
  console.log("✅ consumer connected");
  //   subscribe
  await consumer.subscribe({ topic: "order-created", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      console.log(`- ${prefix} ${message.key}#${message.value}`);
      const value = message.value?.toString();
      console.log(`❇️ message:${value}`);
    },
  });
}

startConsumer().catch(console.error);
