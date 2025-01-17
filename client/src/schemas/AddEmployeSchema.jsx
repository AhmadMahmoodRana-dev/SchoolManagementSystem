import * as Yup from "yup";

const employeeFormSchema = Yup.object({
  employeeName: Yup.string().required("Employee Name is required"),
  mobileNo: Yup.string()
    .required("Mobile No is required")
    .matches(/^\+92\d{10}$/, "Invalid phone number format"),
  employeeRole: Yup.string().required("Employee Role is required"),
  dateOfJoining: Yup.date().required("Date of Joining is required"),
  monthlySalary: Yup.number()
    .required("Monthly Salary is required")
    .min(1, "Salary must be positive"),
  nationalId: Yup.string()
    .required("National ID is required")
    .matches(/^\d{13}$/, "National ID must be 13 digits"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email Address is required"),
  homeAddress: Yup.string().required("Home Address is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  fatherHusbandName: Yup.string(),
  gender: Yup.string(),
  experience: Yup.string(),
  religion: Yup.string(),
  education: Yup.string(),
});
export default employeeFormSchema;
