import express from "express";
import "dotenv/config.js";
import cors from "cors";
import Routing from "./routes/Function.routes.js";
import ConnectDb from "./config/DB.js";

const app = express();
const Port = process.env.PORT;

// MIDDLEWARES
app.use(express.json());
app.use(cors());
Routing(app)

// START SERVER
  app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
  });
