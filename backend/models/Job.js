import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: { type: String, required: true },
    experience: { type: Number, required: true },
    salary: { type: Number, required: true },
    type: { type: String, enum: ["Full-time", "Part-time"], required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the employer
    datePosted: { type: Date, default: Date.now },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);
export default Job;