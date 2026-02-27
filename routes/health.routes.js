import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

export default router;
router.get("/ready", (req, res) => {
  res.json({ status: "ready" });
});