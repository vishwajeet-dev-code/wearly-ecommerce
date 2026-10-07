import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    street: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    pincode: {
        type: String,
        required: true,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    addresses:[addressSchema],



    // EXTRA SCHEMAS, NOT NECCESSARY
   
    /* 
    age: {
        type: Number,
        required: true,
        min: 16,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    }
    */

}, {timestamps: true})

export const User = mongoose.model("User", userSchema)