import ConnectDb from "../config/DB.js";
import { Employee } from "../models/Employee.model.js";
import { User } from "../models/User.model.js";

// POST /api/employees
export const PostEmployee = async (req, res) => {
  await ConnectDb();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    const newEmployee = await Employee.create(req.body);
    const username =
      newEmployee.employeeName.toLowerCase().replace(/\s+/g, "") +
      newEmployee._id.toString().slice(-4);
    const password = "123456";

    const newUser = new User({
      username,
      password,
      role: newEmployee.employeeRole,
      employeeId: newEmployee._id,
    });

    await newUser.save();

    res.status(201).json({
      message: "Employee and user created successfully",
      employee: newEmployee,
      user: { username: newUser.username, role: newUser.role },
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating employee and user", error });
  }
};

// GET /api/employees
export const GetEmployees = async (req, res) => {
  await ConnectDb();

  try {
    const employees = await Employee.find();
    console.log(employees);
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// DELETE /api/employees
export const DeleteEmployee = async (req, res) => {
  await ConnectDb();

  const id = req.params.id;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const deletedUser = await User.findOneAndDelete({
      employeeId: deletedEmployee._id,
    });
    res.status(200).json({
      message: "Employee and associated user deleted successfully",
      employee: deletedEmployee,
      user: deletedUser || "No associated user found",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee and associated user",
      error: error.message,
    });
  }
};
