import mongoose from "mongoose";

const ClassesSchema = new mongoose.Schema({
  classesName: { type: String, required: true },
  monthlyTutionFees: { type: Number, required: true },
  classTeacherId: { type: String, required: true },
 
});

export const Classes = mongoose.model("Classes", ClassesSchema);
