import ConnectDb from "../config/DB.js";
import { Student } from "../models/Student.model.js";
import { User } from "../models/User.model.js";

// POST /api/students
export const PostStudent = async (req, res) => {
  await ConnectDb();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const newStudent = await Student.create(req.body);
    const username =
      newStudent.studentName.toLowerCase().replace(/\s+/g, "") +
      newStudent._id.toString().slice(-4);
    const password = "Student123";

    const newUser = new User({
      username,
      password,
      role: "Students",
      employeeId: newStudent._id,
    });

    await newUser.save();

    res.status(201).json({
      message: "Student and user created successfully",
      student: newStudent,
      user: { username: newUser.username, role: newUser.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating student and user", error });
  }
};

// GET /api/students
export const GetStudent = async (req, res) => {
  await ConnectDb();

  try {
    const students = await Student.find();
    console.log(students);
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// DELETE /api/students
export const DeleteStudent = async (req, res) => {
  await ConnectDb();

  const id = req.params.id;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    const deletedUser = await User.findOneAndDelete({
      employeeId: deletedStudent._id,
    });

    res.status(200).json({
      message: "Student and associated user deleted successfully",
      student: deletedStudent,
      user: deletedUser || "No associated user found",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting student and associated user",
      error: error.message,
    });
  }
};
