import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/course.js";
import Opportunity from "./models/opportunity.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected for seeding");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  // Sample data
  const courses = [
    {
      title: "AI for Everyone",
      provider: "Coursera",
      url: "https://www.coursera.org/learn/ai-for-everyone",
      tags: ["AI", "Beginner"],
      level: "Beginner",
    },
    {
      title: "Frontend Web Development",
      provider: "freeCodeCamp",
      url: "https://www.freecodecamp.org",
      tags: ["Web", "HTML", "CSS", "JavaScript"],
      level: "Beginner",
    },
    {
      title: "Data Science with Python",
      provider: "edX",
      url: "https://www.edx.org",
      tags: ["Data", "Python"],
      level: "Intermediate",
    },
  ];

  const opportunities = [
    {
      title: "AI Research Internship",
      organization: "Google",
      url: "https://careers.google.com",
      type: "Internship",
      tags: ["AI", "Machine Learning"],
    },
    {
      title: "Frontend Developer Fellowship",
      organization: "Mozilla",
      url: "https://mozilla.org",
      type: "Fellowship",
      tags: ["Web", "Frontend"],
    },
    {
      title: "Data Analyst Graduate Program",
      organization: "IBM",
      url: "https://www.ibm.com/careers",
      type: "Job",
      tags: ["Data", "Analytics"],
    },
  ];

  try {
    // Clear existing data
    await Course.deleteMany();
    await Opportunity.deleteMany();

    // Insert new data
    await Course.insertMany(courses);
    await Opportunity.insertMany(opportunities);

    console.log("🌱 Database successfully seeded!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
