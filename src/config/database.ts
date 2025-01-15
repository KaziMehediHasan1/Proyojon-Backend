import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("mongodb is connected successfull");
  } catch (error) {
    const err = error as Error;
    console.log("filed to connect db ", err.message);
  }
};

export default connectDB;
