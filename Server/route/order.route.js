import { Router } from "express";
import auth from "../middleware/auth.js";
import { captureOrderPaypalController, createOrderCOntroller, createOrderPaypalController, getOrderDeatilsController, getTotalOrdersCountController, totalSalesController, totalUsersController, updateOrderStatusController } from "../controllers/order.controller.js";

const orderRouter = Router()

orderRouter.post("/create", auth, createOrderCOntroller)
orderRouter.get("/order-list", auth, getOrderDeatilsController);
orderRouter.post("/create-order-paypal", auth, createOrderPaypalController);
orderRouter.post("/capture-order-paypal", auth, captureOrderPaypalController);
orderRouter.put("/order-status/:id", auth, updateOrderStatusController);
orderRouter.get("/count", auth, getTotalOrdersCountController);
orderRouter.get("/sales", auth, totalSalesController);
orderRouter.get("/users", auth, totalUsersController);

export default orderRouter