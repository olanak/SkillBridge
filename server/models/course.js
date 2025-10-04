import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  provider: String,   // e.g., YouTube, Khan Academy
  url: String,
  tags: [String]
});

export default mongoose.model("Course", courseSchema);
