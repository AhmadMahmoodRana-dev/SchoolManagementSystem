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
    // Step 1: Create the employee
    const newEmployee = await Employee.create(req.body);

    // Step 2: Automatically create a user
    const username = newEmployee.employeeName.toLowerCase().replace(/\s+/g, '') + newEmployee._id.toString().slice(-4);
    const password = '123456'; // Generate or use a secure default password

    const newUser = new User({
      username,
      password, // You can email or prompt the user to change this
      role: newEmployee.employeeRole, // Sync role with employeeRole
      employeeId: newEmployee._id,
    });

    await newUser.save();

    res.status(201).json({
      message: 'Employee and user created successfully',
      employee: newEmployee,
      user: { username: newUser.username, role: newUser.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating employee and user', error });
  }
};



// GET /api/employees
export const GetEmployees = async (req, res) => {
  await ConnectDb(); // Connect to the database

  try {
    const employees = await Employee.find(); // Fetch all employees from the database
    console.log(employees); // Log the fetched data for debugging
    res.status(200).json(employees); // Respond with the employee data in JSON format
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error', error: error.message }); // Send an error response
  }
};

// DELETE /api/employees

// DELETE /api/employees
export const DeleteEmployee = async (req, res) => {
  await ConnectDb();

  const id = req.params.id;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Step 1: Find the employee to be deleted
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Step 2: Find and delete the associated user
    const deletedUser = await User.findOneAndDelete({ employeeId: deletedEmployee._id });

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

