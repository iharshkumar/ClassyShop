import mongoose from 'mongoose';

const productRAMSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
},
    { timestamps: true }
)

const ProductRAMSModel = mongoose.model('productRAMS', productRAMSchema)

export default ProductRAMSModel