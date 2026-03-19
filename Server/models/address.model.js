import mongoose from "mongoose";

const addressSchema = mongoose.Schema({

    fullName: {
        type: String,
        default: ""
    },
    address_line1: {
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
    selected: {
        type: Boolean,
        default: true
    },
    landmark: {
        type: String,
    },
    addressType: {
        type: String,
        enum: ["home", "work"],
        lowercase: true
    },
    userId: {
        type: String,
        default: ""
    }


},
    { timestamps: true }
)


const AddressModel = mongoose.model("address", addressSchema)

export default AddressModel