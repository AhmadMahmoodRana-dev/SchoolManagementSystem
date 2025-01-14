import ConnectDb from "../config/DB.js";
import { Employee } from "../models/Employee.model.js";


// POST /api/employees
export const PostEmployee = async (req, res) => {
  await ConnectDb();
  
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();

    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating employee", error: error.message });
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

    res.status(200).json({
      message: "Employee deleted successfully",
      employee: deletedEmployee,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting employee", error: error.message });
  }
};
