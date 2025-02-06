import { Router } from "express";
import {
  checkIn,
  checkOut,
  getAllUsersAttendance,
  getSingleUserAttendance,
} from "../controller/Attendence.controller.js";

const attendance = Router();

attendance.post("/checkin", checkIn);
attendance.post("/checkout", checkOut);
attendance.get("/attendance/:id", getSingleUserAttendance);
attendance.get("/attendance", getAllUsersAttendance);

export default attendance;
