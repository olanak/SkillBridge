const mongoose = require('mongoose');
const { Schema } = mongoose;

const progressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // A special type for referencing another document
    ref: 'User', // The model to link to
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'], // The value must be one of these
    default: 'Not Started',
  },
}, {
  timestamps: true,
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;