import { Router } from "express";
import { User } from "../models/User.model.js";
import bcrypt from 'bcrypt'
import ConnectDb from "../config/DB.js";
import jwt from "jsonwebtoken"
const auth = Router();

auth.post("/login", async (req, res) => {

  await ConnectDb()
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in", error });
  }
});
export default auth;
