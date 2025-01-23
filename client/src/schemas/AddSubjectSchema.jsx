import * as Yup from "yup";

const subjectFormSchema = Yup.object({
  subjectName: Yup.string().required("Subject Name is required"),
  subjectMarks: Yup.number().required("Subject Marks is required"),
  subjectClassName: Yup.string().required("Subject Class Name is required"),
});
export default subjectFormSchema;
