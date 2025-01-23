import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  subjectMarks: { type: Number, required: true },
  subjectClassName: { type: String, required: true },
 
});

export const Subject = mongoose.model("Subject", SubjectSchema);
