import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    image: {
        type: String,
        default: ''
    },
    userName: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0
    },
    review: {
        type: String,
        default: ''
    },
    userId: {
        type: String,
        default: ''
    },
    productId: {
        type: String,
        default: ''
    }
},
    { timestamps: true }
)


const ReviewModel = mongoose.model("Reviews", reviewSchema)

export default ReviewModel