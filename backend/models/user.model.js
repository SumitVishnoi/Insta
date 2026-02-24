const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User already exists"],
        required: [true, "User name is required"]
    },
    email: {
        type: String,
        unique: [true, "User already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/coders11/default-avatar-profile-icon-social-600nw-1906669723.webp"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel