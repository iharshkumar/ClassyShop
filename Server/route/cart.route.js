import { Router } from "express";
import auth from "../middleware/auth.js";
import { addToCartItemController, deleteCartItemQtyController, getCartItemController, updateCartItemQtyController } from "../controllers/cart.controller.js";

const cartRouter=Router();

cartRouter.post('/add',auth,addToCartItemController)
cartRouter.get('/get',auth,getCartItemController)
cartRouter.put('/update-qty',auth,updateCartItemQtyController)
cartRouter.delete('/delete-cart_item',auth,deleteCartItemQtyController)


export default cartRouter