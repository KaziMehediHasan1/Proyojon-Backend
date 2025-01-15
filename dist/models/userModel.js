import mongoose, { Schema } from "mongoose";
// SCHEMA OF USERS
const userModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const UserModel = mongoose.model("user", userModel);
export default UserModel;
