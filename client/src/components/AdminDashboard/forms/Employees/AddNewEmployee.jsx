import React from "react";
import { useFormik } from "formik";
import RenderInput from "../Input/RenderInput";
import RenderSelect from "../Select/RenderSelect";
import employeeFormSchema from "@/schemas/AddEmployeSchema";
import useApisStore from "@/store/Apis.store";
import OptionalShownComponent from "../header/OptionalShownComponent";
import FormTitle from "../header/FormTitle";
import SubmitButton from "../buttons/SubmitButton";
const AddNewEmployee = () => {
  const { setData} = useApisStore();

  const formik = useFormik({
    initialValues: {
      employeeName: "",
      mobileNo: "",
      employeeRole: "",
      dateOfJoining: "",
      monthlySalary: "",
      nationalId: "",
      email: "",
      homeAddress: "",
      dateOfBirth: "",
      fatherHusbandName: "",
      gender: "",
      experience: "",
      religion: "",
      education: "",
    },
    validationSchema: employeeFormSchema,
    onSubmit: (values, { resetForm }) => {
      setData("http://localhost:4000/api/form/employee", values, "employee");
      resetForm();
    },
  });

  return (
    <div className="flex flex-col w-full h-screen bg-[#f6f7fb] dark:bg-gray-700/20">
      <div className="main-content w-full items-center flex flex-col gap-3 py-10">
        <h1 className="text-4xl font-bold dark:text-blue-600">Employee Form</h1>
        <OptionalShownComponent />
      </div>
      <form onSubmit={formik.handleSubmit} className="px-8">
        {/* Basic Information Section */}
        <div className="basic-info">
          <FormTitle number={"1"} content={"Basic Information"} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-6 py-10 border-t border-t-[#212229] dark:border-t-gray-600">
            <RenderInput
              name="employeeName"
              type="text"
              placeholder="Name of Employee"
              label="Employee Name*"
              isRequired={true}
              formik={formik}
            />
            <RenderInput
              name="mobileNo"
              type="text"
              placeholder="e.g +92xxxxxxxxx"
              label="Mobile No for SMS/Whatsapp*"
              isRequired={true}
              formik={formik}
            />
            <RenderSelect
              name="employeeRole"
              options={[
                { value: "Principal", label: "Principal" },
                { value: "Management Staff", label: "Management Staff" },
                { value: "Teacher", label: "Teacher" },
                { value: "Accountant", label: "Accountant" },
                { value: "Store Manager", label: "Store Manager" },
                { value: "Admin", label: "Admin" },
                { value: "Other", label: "Other" },
              ]}
              label="Employee Role*"
              formik={formik}
            />
            <RenderInput
              name="dateOfJoining"
              type="date"
              placeholder=""
              label="Date of Joining*"
              isRequired={true}
              formik={formik}
            />
            <RenderInput
              name="monthlySalary"
              type="number"
              placeholder="Monthly Salary"
              label="Monthly Salary*"
              isRequired={true}
              formik={formik}
            />
            <RenderInput
              name="nationalId"
              type="text"
              placeholder="National ID"
              label="National ID*"
              isRequired={true}
              formik={formik}
            />
          </div>
        </div>

        {/* Other Information Section */}
        <div className="basic-info">
        <FormTitle number={"2"} content={"Other Inforamtion"} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-6 py-10 border-t border-t-[#212229] dark:border-t-gray-600">
            <RenderInput
              name="fatherHusbandName"
              type="text"
              placeholder="Father / Husband Name"
              label="Father / Husband Name"
              isRequired={false}
              formik={formik}
            />
            <RenderSelect
              name="gender"
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ]}
              label="Gender*"
              formik={formik}
            />
            <RenderInput
              name="experience"
              type="text"
              placeholder="Experience"
              label="Experience"
              isRequired={false}
              formik={formik}
            />
            <RenderInput
              name="religion"
              type="text"
              placeholder="Religion"
              label="Religion"
              isRequired={false}
              formik={formik}
            />
            <RenderInput
              name="education"
              type="text"
              placeholder="Education"
              label="Education"
              isRequired={false}
              formik={formik}
            />
            <RenderInput
              name="email"
              type="email"
              placeholder="demo@example.com"
              label="Email Address*"
              isRequired={true}
              formik={formik}
            />
            <RenderInput
              name="homeAddress"
              type="text"
              placeholder="Home Address"
              label="Home Address*"
              isRequired={true}
              formik={formik}
            />
            <RenderInput
              name="dateOfBirth"
              type="date"
              placeholder=""
              label="Date of Birth*"
              isRequired={true}
              formik={formik}
            />
          </div>
        </div>
        <SubmitButton text={"Submit"} />
      </form>
    </div>
  );
};

export default AddNewEmployee;
