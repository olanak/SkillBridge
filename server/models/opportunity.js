import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema({
  title: String,
  provider: String,
  url: String,
  type: String,  // job | internship | volunteer
  tags: [String]
});

export default mongoose.model("Opportunity", opportunitySchema);
