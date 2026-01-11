import { Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: ["kafka:9092"],
});

export const producer = kafka.producer();
