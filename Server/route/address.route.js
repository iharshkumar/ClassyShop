import { Router } from "express";
import auth from "../middleware/auth.js";
import { addAddressController, deleteAddressController, getAddressController } from "../controllers/address.controller.js";


const addressRouter = Router();
addressRouter.post("/add",auth,addAddressController)
addressRouter.get("/get",auth,getAddressController)
addressRouter.delete("/:id",auth,deleteAddressController)

export default addressRouter