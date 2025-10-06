// server/scripts/migrateOpportunities.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Opportunity from "../models/opportunity.js";

dotenv.config();

const migrateOpportunities = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const result = await Opportunity.updateMany(
      {},
      {
        $set: {
          source: "Internal",
          jobType: "Full-time",
          salaryRange: { min: 0, max: 0, currency: "USD" },
          postedDate: new Date(),
        },
      }
    );

    console.log(`✅ Migration complete: ${result.modifiedCount} documents updated`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
};

migrateOpportunities();
