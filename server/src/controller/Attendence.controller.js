import ConnectDb from "../config/DB.js";
import { Attendance } from "../models/Attendence.model.js";

const formatDateTime = (isoString) => {
  if (!isoString) return null;
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Karachi", // ✅ Pakistan Time Zone set karein
  });
};

const getStartOfDay = () => {
  const date = new Date();
  // UTC ke hisab se date set karein
  date.setUTCHours(0, 0, 0, 0); // ✅ UTC midnight use karein
  return date;
};
const calculateTotalTime = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return null;
  const diff = new Date(checkOut) - new Date(checkIn);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
};

// ✅ Check-in controller

export const checkIn = async (req, res) => {
  await ConnectDb();
  try {
    const { id, role, username } = req.body;
    const startOfDay = getStartOfDay();

    // Check if the user already checked in today
    const existingAttendance = await Attendance.findOne({
      user_id: id,
      date: startOfDay,
    });

    if (existingAttendance) {
      return res.status(400).json({
        success: false,
        message: existingAttendance.checkOutTime
          ? "Already checked out today"
          : "Already checked in - Please check out first",
      });
    }

    // Create new attendance entry
    const newAttendance = new Attendance({
      user: username,
      user_id: id,
      user_role: role,
      date: startOfDay,
      checkInTime: new Date(),
    });

    await newAttendance.save();
    res.status(201).json({
      success: true,
      message: "Checked in successfully",
      checkInTime: formatDateTime(newAttendance.checkInTime),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ✅ Check-out controller
export const checkOut = async (req, res) => {
  await ConnectDb();
  try {
    const { id } = req.body;
    const startOfDay = getStartOfDay();

    // Find today's attendance record
    const attendance = await Attendance.findOne({
      user_id: id,
      date: startOfDay,
    });

    if (!attendance) {
      return res.status(404).json({
        success: false,
        message: "No check-in found for today",
      });
    }

    if (attendance.checkOutTime) {
      return res.status(400).json({
        success: false,
        message: "Already checked out today",
      });
    }

    attendance.checkOutTime = new Date();
    const totalTime = calculateTotalTime(
      attendance.checkInTime,
      attendance.checkOutTime
    );
    attendance.totalTime = totalTime;
    await attendance.save();

    res.status(200).json({
      success: true,
      message: "Checked out successfully",
      checkInTime: formatDateTime(attendance.checkInTime),
      checkOutTime: formatDateTime(attendance.checkOutTime),
      totalTime: totalTime,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ✅ Get single user's attendance data
export const getSingleUserAttendance = async (req, res) => {
  await ConnectDb();
  try {
    const { id } = req.params; // User ID from URL params

    // Find all attendance records for the user
    const attendanceRecords = await Attendance.find({ user_id: id }).sort({
      date: -1,
    });

    if (!attendanceRecords || attendanceRecords.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No attendance records found for this user",
      });
    }

    // Format the data
    const formattedRecords = attendanceRecords.map((record) => ({
      date: formatDateTime(record.date),
      checkInTime: formatDateTime(record.checkInTime),
      checkOutTime: formatDateTime(record.checkOutTime),
      totalTime: record.totalTime,
    }));

    res.status(200).json({
      success: true,
      message: "Attendance records fetched successfully",
      data: formattedRecords,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ✅ Get all users' attendance data
export const getAllUsersAttendance = async (req, res) => {
  await ConnectDb();
  try {
    // Find all attendance records
    const attendanceRecords = await Attendance.find().sort({ date: -1 });

    if (!attendanceRecords || attendanceRecords.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No attendance records found",
      });
    }

    // Format the data
    const formattedRecords = attendanceRecords.map((record) => ({
      user: record.user,
      user_id: record.user_id,
      user_role: record.user_role,
      date: formatDateTime(record.date),
      checkInTime: formatDateTime(record.checkInTime),
      checkOutTime: formatDateTime(record.checkOutTime),
      totalTime: record.totalTime,
    }));

    res.status(200).json({
      success: true,
      message: "All attendance records fetched successfully",
      data: formattedRecords,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const datata = (req, res) => {
  res.json({
    message: "Hello from the data route!",
  });
};
