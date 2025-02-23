import { Router } from "express";
import { DeleteEmployee, GetEmployees, PostEmployee } from "../controller/Employee.controller.js";
import { DeleteClass, GetClass, PostClass } from "../controller/Classes.controller.js";
import { DeleteStudent, GetStudent, PostStudent } from "../controller/Student.controller.js";
import { DeleteSubject, GetSubject, PostSubject } from "../controller/Subject.controller.js";


const form = Router();

// EMPLOYEE

form.get("/employee",GetEmployees)
form.post("/employee",PostEmployee)
form.delete("/employee/:id",DeleteEmployee)


// CLASS 

form.get("/classes",GetClass)
form.post("/classes",PostClass)
form.delete("/classes/:id",DeleteClass)

// Students 

form.get("/students",GetStudent)
form.post("/students",PostStudent)
form.delete("/students/:id",DeleteStudent)

// Subjects 

form.get("/subjects",GetSubject)
form.post("/subjects",PostSubject)
form.delete("/subjects/:id",DeleteSubject)

export default form;
