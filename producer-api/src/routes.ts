import { Request, Response, Router } from "express";
import { producer } from "./kafka";

const router = Router();

// check

router.get("/", (req: Request, res: Response) => {
  res.json({ status: "Api is running..." });
});
router.post("/orders", async (req: Request, res: Response) => {
  const { product, price } = req.body;

  await producer.send({
    topic: "order-created",
    messages: [
      {
        value: JSON.stringify({ product, price, createdAt: new Date() }),
      },
    ],
  });

  res.json({ message: "Order placed successfully" });
});

export default router;
