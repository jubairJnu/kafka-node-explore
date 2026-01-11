import { Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
  logLevel: logLevel.INFO,
  clientId: "consumer-example",
  brokers: ["kafka:9092"],
});



export const consumer = kafka.consumer({ groupId: "order-group" });
