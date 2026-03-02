import mongoose from 'mongoose';

const productWEIGHTSchema = mongoose.Schema({
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

const productWEIGHTModel = mongoose.model('productWEIGHT', productWEIGHTSchema)

export default productWEIGHTModel