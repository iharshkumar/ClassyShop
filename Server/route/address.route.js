import { Router } from "express";
import auth from "../middleware/auth.js";
import { addAddressController, getAddressController } from "../controllers/address.controller.js";


const addressRouter = Router();
addressRouter.post("/add",auth,addAddressController)
addressRouter.get("/get",auth,getAddressController)

export default addressRouter