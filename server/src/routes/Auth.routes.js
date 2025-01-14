import { Router } from "express";
const auth = Router();


auth.get("/auth", async (req, res) => {
  res.send("Login successful");
});
export default auth;
