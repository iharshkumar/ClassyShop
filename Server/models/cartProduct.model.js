import mongoose from "mongoose"

const cartProductsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
},
    { timestamps: true }
)

const CartProductModel = mongoose.model('cartProduct',cartProductsSchema)

export default CartProductModel