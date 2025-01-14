import { Router } from "express";
import form from "./Form.routes.js";
import auth from "./Auth.routes.js";

const routes = Router()

routes.use("/form",form)
routes.use("/auth",auth)

export default routes;