import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  title: { type: String, required: true },
  company: String,
  location: String,
  description: { type: String, required: true },
  requiredSkills: [String],

  postedAt: { type: Date, default: Date.now },
});

export const JobModel = mongoose.model("Job", JobSchema);
