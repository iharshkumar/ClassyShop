import mongoose from "mongoose";

const addressSchema = mongoose.Schema({

    address_line: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pincode: {
        type: String
    },
    country: {
        type: String
    },
    mobile: {
        type: Number,
        default: null
    },
    status: {
        type: Boolean,
        default: null
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        default: ""
    }


},
    { timestamps: true }
)


const AddressModel = mongoose.model("address", addressSchema)

export default AddressModel