import mongoose, { disconnect, trusted } from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    brand: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    oldPrice: {
        type: Number,
        default: ''
    },
    catName: {
        type: String,
        default: ""
    },
    catId: {
        type: String,
        default: ""
    },
    subCatId: {
        type: String,
        default: ""
    },
    subCat: {
        type: String,
        default: ""
    },
    // subCatName:{
    //     type:String,
    //     default:""
    // },
    thirdsubCat: {
        type: String,
        default: ""
    },
    // thirdsubCatName:{
    //     type:String,
    //     default:""
    // },
    thirdsubCatId: {
        type: String,
        default: ""
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        reuired: true
    },
    discount: {
        type: Number,
        required: true
    },
    productRam: [
        {
            type: String,
            defaulr: null
        }
    ],
    size: [
        {
            type: String,
            default: null
        }
    ],
    productWeight: [
        {
            type: String,
            default: null
        }
    ],
    location: [
        {
            value: {
                type: String
            },
            label: {
                type: String
            }
        }
    ],
    dateCreated: {
        type: Date,
        default: Date.now,
    }
},
    { timestamps: true }
)

const ProductModel = mongoose.model('Product',productSchema)

export default ProductModel