import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    default: [],
  },
  interests: {
    type: [String],
    default: [],
  },
  progress: {
    type: Number,
    default: 0,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
