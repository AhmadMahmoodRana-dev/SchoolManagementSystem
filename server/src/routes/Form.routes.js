import { Router } from "express";
import { DeleteEmployee, GetEmployees, PostEmployee } from "../controller/Employee.controller.js";
import { DeleteClass, GetClass, PostClass } from "../controller/Classes.controller.js";


const form = Router();

// EMPLOYEE

form.get("/employee",GetEmployees)
form.post("/employee",PostEmployee)
form.delete("/employee/:id",DeleteEmployee)


// CLASS 

form.get("/classes",GetClass)
form.post("/classes",PostClass)
form.delete("/classes/:id",DeleteClass)

export default form;
