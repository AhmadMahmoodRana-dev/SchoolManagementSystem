import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  user_role: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  checkInTime: {
    type: String,
  },
  checkOutTime: {
    type: String,
  },
  totalTime: {
    type: String,
  },
});

export const Attendance = mongoose.model("Attendance", AttendanceSchema);
