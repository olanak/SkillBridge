// server/models/Opportunity.js
import mongoose from "mongoose";

const OpportunitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    organization: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ["job", "internship", "volunteer"],
      default: "job",
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Remote", "Contract", "Volunteer"],
      default: "Full-time",
    },
    location: {
      type: String,
      trim: true,
      default: "Remote",
    },
    country: {
      type: String,
      trim: true,
    },
    skillsRequired: {
      type: [String],
      default: [],
    },
    salaryRange: {
      min: { type: Number },
      max: { type: Number },
      currency: { type: String, default: "USD" },
    },
    url: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      enum: ["Internal", "UN Volunteers", "Indeed", "LinkedIn", "Other"],
      default: "Internal",
    },
    externalId: {
      type: String,
      unique: false,
      sparse: true, // not all docs have it
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Opportunity", OpportunitySchema);
