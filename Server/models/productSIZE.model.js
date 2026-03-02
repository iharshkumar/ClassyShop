import mongoose from 'mongoose';

const productSIZESchema = mongoose.Schema({
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

const productSIZEModel = mongoose.model('productSIZE', productSIZESchema)

export default productSIZEModel