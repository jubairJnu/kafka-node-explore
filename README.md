
# Event-Driven Order Processing with Kafka & Node.js
This project demonstrates a real-world, event-driven microservice architecture using Apache Kafka (KRaft mode), Node.js (Express + TypeScript), and Docker.

It is designed as a learning-focused but production-inspired system, showcasing how modern backend services communicate asynchronously using Kafka.


## What Problem Does This Solve?

- Decouple services using Kafka events
- Handle high-throughput asynchronous workflows
- Build scalable backend systems using consumer groups
- Prepare systems for microservice architectures


## Architecture Overview

Clone the project

```bash
Client
  |
  | HTTP API
  v
Producer API (Express + TS)
  |
  | Kafka Event
  v
Kafka Broker (KRaft mode)
  |
  | Consumer Group
  v
Consumer Service (Worker)

```
```bash
kafka-node-explore/
│
├── producer-api/
│   ├── src/
│   │   ├── index.ts        // Express server + producer startup
│   │   ├── kafka.ts        // Kafka producer configuration
│   │   └── routes/         // Order API routes
│   └── Dockerfile
│
├── consumer-api/
│   ├── src/
│   │   ├── index.ts        // Kafka consumer runtime
│   │   └── kafka.ts        // Kafka consumer configuration
│   └── Dockerfile
│
├── docker-compose.yml      // Kafka + Producer + Consumer
└── README.md
```

## Tech Stack

- Node.js

- TypeScript

- Express.js

- Apache Kafka (KRaft mode – no Zookeeper)

- KafkaJS

- Docker & Docker Compose

