import mongoose from "mongoose";

const EmployeSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  employeeRole: { type: String, required: true },
  dateOfJoining: { type: String, required: true },
  monthlySalary: { type: Number, required: true },
  nationalId: { type: String, required: true },
  email: { type: String, required: true },
  homeAddress: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  fatherHusbandName: { type: String },
  gender: { type: String, required: true },
  experience: { type: String },
  religion: { type: String },
  education: { type: String },
});

export const Employee = mongoose.model("Employee", EmployeSchema);
