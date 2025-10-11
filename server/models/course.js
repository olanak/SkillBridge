const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  source: {
    type: String, // e.g., "YouTube", "Coursera"
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // Used for searching and recommendations (e.g., ["Python", "Web Dev"])
    default: [],
  },
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;