import ConnectDb from "../config/DB.js";
import { Subject } from "../models/Subject.model.js";


// POST /api/Class
export const PostSubject = async (req, res) => {
  await ConnectDb();
  
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const newSubject = new Subject(req.body);
    await newSubject.save();

    res.status(201).json({
      message: "Subject created successfully",
      employee: newSubject,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating Subject", error: error.message });
  }
};

// GET /api/Subject
export const GetSubject = async (req, res) => {
  await ConnectDb();
  try {
    const subjects = await Subject.find();
    console.log(subjects);
    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message }); 
  }
};

// DELETE /api/Subject

export const DeleteSubject = async (req, res) => {
  await ConnectDb();

  const id = req?.params?.id;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const deletedSubject = await Subject.findByIdAndDelete(id);

    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json({
      message: "Subject deleted successfully",
      Subject: deletedSubject,
    });
  } catch (error) {
   res.status(500).json({ message: "Error deleting Subject", error: error.message });
  }
};