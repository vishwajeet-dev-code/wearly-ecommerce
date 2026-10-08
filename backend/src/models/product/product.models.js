import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    originalPrice: {
        type: Number,
        required: true,
    },

    discount: {
        value: {
            type: Number,
            default: 0,
        },
        type: {
            type: String,
            enum: ["percentage", "fixed"],
            default: "percentage",
        }
    },
    productImage: {
        type: String,
        required: true,
    },
    stackQuantity: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)