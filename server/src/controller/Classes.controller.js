import ConnectDb from "../config/DB.js";
import { Classes } from "../models/Classes.model.js";


// POST /api/Class
export const PostClass = async (req, res) => {
  await ConnectDb();
  
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const newClass = new Classes(req.body);
    await newClass.save();

    res.status(201).json({
      message: "Class created successfully",
      employee: newClass,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating Class", error: error.message });
  }
};



// GET /api/Class
export const GetClass = async (req, res) => {
  await ConnectDb(); // Connect to the database

  try {
    const Class = await Classes.find(); // Fetch all Class from the database
    console.log(Class); // Log the fetched data for debugging
    res.status(200).json(Class); // Respond with the employee data in JSON format
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error', error: error.message }); // Send an error response
  }
};

// DELETE /api/Class

export const DeleteClass = async (req, res) => {
  await ConnectDb();

  const id = req.params.id;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const deletedClass = await Classes.findByIdAndDelete(id);

    if (!deletedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.status(200).json({
      message: "Class deleted successfully",
      Class: deletedClass,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Class", error: error.message });
  }
};
