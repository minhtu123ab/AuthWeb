import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  name: { type: String, required: true },
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
