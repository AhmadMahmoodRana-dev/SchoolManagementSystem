import * as Yup from "yup";

const classFormSchema = Yup.object({
  classesName: Yup.string().required("Class Name is required"),

  monthlyTutionFees: Yup.number()
    .required("Monthly Tution Fees is required")
    .min(1, "Salary must be positive"),

  classTeacherId: Yup.string().required("Class Teacher is required"),
});
export default classFormSchema;
