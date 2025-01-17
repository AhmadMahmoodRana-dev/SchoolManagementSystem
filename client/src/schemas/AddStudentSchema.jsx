import * as Yup from "yup";

const StudentFormSchema = Yup.object().shape({
  studentName: Yup.string().required("Student name is required"),
  registrationNo: Yup.number()
    .typeError("Registration number must be a number")
    .required("Registration number is required"),
  class: Yup.string().required("Class is required"),
  admissionDate: Yup.string().required("Admission date is required"),
  discountPercentage: Yup.number()
    .typeError("Discount percentage must be a number")
    .required("Discount percentage is required"),
  mobileNo: Yup.string()
  .required("Mobile No is required")
  .matches(/^\+92\d{10}$/, "Invalid phone number format"),
  
  cnic: Yup.string().required("CNIC is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  orphan: Yup.boolean(),
  gender: Yup.string().required("Gender is required"),
  cast: Yup.string(),
  osc: Yup.boolean(),
  identityMark: Yup.string(),
  previousSchool: Yup.string(),
  religion: Yup.string().required("Religion is required"),
  bloodGroup: Yup.string(),
  totalSiblings: Yup.number()
    .typeError("Total siblings must be a number")
    .required("Total siblings is required"),
  previousId: Yup.string(),
  address: Yup.string().required("Address is required"),


  fatherName: Yup.string().required("Father's name is required"),
  fatherNationalId: Yup.number()
    .typeError("Father's national ID must be a number")
    .required("Father's national ID is required"),
  occupation: Yup.string(),
  education: Yup.string().required("Education is required"),
  fatherMobileNo: Yup.string()
  .required("Mobile No is required")
  .matches(/^\+92\d{10}$/, "Invalid phone number format"),
  profession: Yup.string(),
  income: Yup.number(),


  motherName: Yup.string().required("Mother's name is required"),
  motherNationalId: Yup.string(),
  motherOccupation: Yup.string(),
  motherEducation: Yup.string(),
  motherMobileNo: Yup.string()
  .required("Mobile No is required")
  .matches(/^\+92\d{10}$/, "Invalid phone number format"),
  motherprofession: Yup.string(),
  motherIncome: Yup.number().typeError("Mother's income must be a number"),
});

export default StudentFormSchema;
