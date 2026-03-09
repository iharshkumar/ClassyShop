import mongoose from 'mongoose';

const adsBannerV1Schema = mongoose.Schema({
    images: [
        {
            type: String,
            required: true
        }
    ],
    dateCreated: {
        type: Date,
        default: Date.now,
    }
},
    { timestamps: true }
)

const AdsBannerV1Model = mongoose.model('AdsBannerV1', adsBannerV1Schema)

export default AdsBannerV1Model

