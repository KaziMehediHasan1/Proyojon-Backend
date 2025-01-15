import UserModel from "../models/userModel.js";
// CREATE USER
const createUser = async (req, res) => {
    try {
        const userInfo = req.body;
        console.log("find user for admin", userInfo);
        const newUser = new UserModel(userInfo);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: err.message });
    }
};
// GET ALL USERS FOR ADMIN!
const getUsers = async (req, res) => {
    try {
        const findUsers = await UserModel.find();
        res.status(200).json(findUsers);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: err.message });
    }
};
// DELETE USER
const removeUser = async (req, res) => {
    try {
        const { id } = req.params;
        const removedUser = await UserModel.findByIdAndDelete(id);
        res.status(200).json(removeUser);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ message: err.message });
    }
};
// UPDATE USER BY ROLE
const updateRole = async (req, res) => {
    try {
        const getRole = req.params;
        const findRole = await UserModel.findOne(getRole);
    }
    catch (error) { }
};
export { createUser, getUsers, removeUser, updateRole };
