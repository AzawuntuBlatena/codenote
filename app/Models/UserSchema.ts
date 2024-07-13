import mongoose, { Document, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerckUserId: { type: String, unique: true, required: true },
    emailAddress: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User",userSchema)

export default User;