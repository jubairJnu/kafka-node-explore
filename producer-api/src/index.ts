import express from "express";
import routes from "./routes";
import { producer } from "./kafka";

const app = express();
app.use(express.json());
app.use(routes);

async function start() {
  try {
    await producer.connect();
    app.listen(3000, () =>
      console.log("🚀 API running on http://localhost:3000")
    );
  } catch (err) {
    console.error("❌ Failed to connect to Kafka:", err);
    process.exit(1); // container will exit with error
  }
}


start();
