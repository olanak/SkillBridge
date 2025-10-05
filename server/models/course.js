import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: { type: String, required: true },
  url: { type: String, required: true },
  tags: { type: [String], default: [] },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" }
});

export default mongoose.model("Course", courseSchema);
