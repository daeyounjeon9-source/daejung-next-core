import express from "express";
import { applyReward } from "../controllers/rewardController.js";

const router = express.Router();

router.post("/apply", applyReward);

export default router;