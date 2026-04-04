import express from "express";
import auth from "../middleware/auth.js";
import {
  getAllOrders,
  getOrderById,
  getPipeline,
} from "../controllers/tracking.controller.js";

const trackingRouter = express.Router();

// GET /api/orders/pipeline — must be BEFORE /:id to avoid conflict
trackingRouter.get("/pipeline", auth, getPipeline);

// GET /api/orders — all orders for logged-in user
trackingRouter.get("/", auth, getAllOrders);

// GET /api/orders/:id — single order detail
trackingRouter.get("/:id", auth, getOrderById);

export default trackingRouter;
