import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ["Internship", "Job", "Grant", "Fellowship"], default: "Internship" },
  tags: { type: [String], default: [] }
});

export default mongoose.model("Opportunity", opportunitySchema);
