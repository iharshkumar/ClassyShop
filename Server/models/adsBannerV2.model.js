import mongoose from 'mongoose';

const adsBannerV2Schema = mongoose.Schema({
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

const AdsBannerV2Model = mongoose.model('AdsBannerV2', adsBannerV2Schema)

export default AdsBannerV2Model

