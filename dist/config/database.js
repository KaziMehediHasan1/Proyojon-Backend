import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("mongodb is connected successfull");
    }
    catch (error) {
        const err = error;
        console.log("filed to connect db ", err.message);
    }
};
export default connectDB;
