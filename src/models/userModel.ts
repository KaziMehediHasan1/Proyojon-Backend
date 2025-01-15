import mongoose, { Schema, Document } from "mongoose";


// USER TYPE
interface IUser extends Document {
  name: string;
  email: string;
  photo: string;
  phone: number;
  password: string;
}

// SCHEMA OF USERS
const userModel: Schema = new Schema({
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

const UserModel = mongoose.model<IUser>("user", userModel);

export default UserModel;
