import mongoose from 'mongoose'
import React from 'react'

const userSchema = new mongoose.Schema({
    username:   {
        type: String,
        required: [true, 'pleaase provide a username'],
        unique:true,
    },
    email: {
        type: String,
        required: [true, 'please provide a email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide a email'],
        
    },
    isVerified: {
        type: Boolean,
        default:false,
    },
    isAdmin: {
        type: Boolean,
        default:false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry:Date,
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
