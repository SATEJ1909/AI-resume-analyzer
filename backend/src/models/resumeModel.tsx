import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  resumeText: {
    type: String,
    required: true, 
  },

  parsedData: {
    name: String,
    email: String,
    phone: String,
    skills: [String],
    experience: [String],
    education: [String],
    summary: String,
  },

  aiFeedback: {
    type: String,
  },

  matchScores: [
    {
      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      score: Number, 
      missingKeywords: [String],
    },
  ],

  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ResumeModel = mongoose.model("Resume", ResumeSchema);
