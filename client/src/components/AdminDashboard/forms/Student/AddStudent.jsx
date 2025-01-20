import React, { useEffect, useState } from "react";
import CommonHeader from "../header/CommonHeader";
import OptionalShownComponent from "../header/OptionalShownComponent";
import RenderInput from "../Input/RenderInput";
import RenderSelect from "../Select/RenderSelect";
import useApisStore from "@/store/Apis.store";
import { useFormik } from "formik";
import FormTitle from "../header/FormTitle";
import StudentFormSchema from "@/schemas/AddStudentSchema";
import SubmitButton from "../buttons/SubmitButton";

const AddStudent = () => {
  // Class Option SELECTER
  const { getData, fetchdata, setData } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/classes", "classes");
  }, []);

  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    if (fetchdata?.classes) {
      const formattedData = fetchdata?.classes?.map((data) => ({
        value: data?._id,
        label: data?.classesName,
      }));

      setSelectData(formattedData);
    }
  }, [fetchdata]);

  // FORM
  const formik = useFormik({
    initialValues: {
      studentName: "",
      registrationNo: "",
      class: "",
      admissionDate: "",
      discountPercentage: "",
      mobileNo: "",
      dateOfBirth: "",
      orphan: "",
      gender: "",
      cast: "",
      osc: "",
      identityMark: "",
      previousSchool: "",
      religion: "",
      totalSiblings: "",
      bloodGroup: "",
      previousId: "",
      address: "",
      fatherName: "",
      fatherNationalId: "",
      occupation: "",
      education: "",
      fatherMobileNo: "",
      profession: "",
      income: "",
      motherName: "",
      motherNationalId: "",
      motherOccupation: "",
      motherEducation: "",
      motherMobileNo: "",
      motherProfession: "",
      motherIncome: "",
      cnic: "",
    },
    validationSchema: StudentFormSchema,
    onSubmit: (values, { resetForm }) => {
      setData("http://localhost:4000/api/form/students", values, "students");
      resetForm();
    },
  });

  return (
    <>
      <div className="common-header">
        <CommonHeader firstName={"Students"} SecondName={"Admission Form"} />
      </div>
      <div className="bg-[#f6f7fb] w-full min-h-screen h-auto z-10">
        <div className="optional_Header mt-3">
          <h1 className="text-center font-semibold text-4xl pb-3">
            Admission Form
          </h1>
          <OptionalShownComponent />
        </div>

        <div className="student-form px-8">
          <form onSubmit={formik.handleSubmit}>
            <FormTitle number={"1"} content={"Student Information"} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-6 py-10 border-t border-t-[#212229]">
              <RenderInput
                name="studentName"
                type="text"
                placeholder="Enter your name"
                label="Student Name"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="registrationNo"
                type="number"
                placeholder="Registration Number"
                label="Registration Number"
                isRequired={true}
                formik={formik}
              />
              <RenderSelect
                name="class"
                options={selectData}
                label="Class*"
                formik={formik}
              />
              <RenderInput
                name="admissionDate"
                type="date"
                placeholder="10-01-2025"
                label="Admission Date"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="discountPercentage"
                type="number"
                placeholder="%20"
                label="Discount Percentage"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="mobileNo"
                type="text"
                placeholder="+92 xxxxxxxxx    "
                label="Std Mobile Number"
                isRequired={false}
                formik={formik}
              />
            </div>

            <FormTitle number={"2"} content={"Other Information"} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-6 py-10 border-t border-t-[#212229]">
              <RenderInput
                name="cnic"
                type="number"
                placeholder="Cnic Number"
                label="CNIC / Birth Form"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="dateOfBirth"
                type="date"
                placeholder="12-12-12"
                label="Date of Birth"
                formik={formik}
              />
              <RenderSelect
                name="orphan"
                options={[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ]}
                label="Orphan*"
                formik={formik}
              />
              <RenderSelect
                name="gender"
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "others", label: "Others" },
                ]}
                label="Gender*"
                formik={formik}
              />
              <RenderInput
                name="cast"
                type="text"
                placeholder="Rana"
                label="Cast"
                isRequired={false}
                formik={formik}
              />
              <RenderSelect
                name="osc"
                options={[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ]}
                label="OSC*"
                formik={formik}
              />
              <RenderInput
                name="identityMark"
                type="text"
                placeholder="identityMark"
                label="IdentityMark"
                formik={formik}
              />
              <RenderInput
                name="previousSchool"
                type="text"
                placeholder="previousSchool"
                label="Previous School"
                formik={formik}
              />
              <RenderInput
                name="religion"
                type="text"
                placeholder="Muslim"
                label="Religion"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="bloodGroup"
                type="text"
                placeholder="A+ blood group"
                label="BloodGroup"
                formik={formik}
              />
              <RenderInput
                name="totalSiblings"
                type="text"
                placeholder="Muslim"
                label="TotalSiblings"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="previousId"
                type="text"
                placeholder="e.g. ..."
                label="previous School Id"
                isRequired={false}
                formik={formik}
              />
              <RenderInput
                name="address"
                type="text"
                placeholder="144 A Street Suite "
                label="Address"
                isRequired={true}
                formik={formik}
              />
            </div>
            <FormTitle number={3} content={"Father Information"} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-6 py-10 border-t border-t-[#212229]">
              <RenderInput
                name="fatherName"
                type="text"
                placeholder="FatherName "
                label="FatherName"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="fatherNationalId"
                type="number"
                placeholder="Father National Id "
                label="Father National Id"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="occupation"
                type="text"
                placeholder="Occupation "
                label="Occupation"
                formik={formik}
              />
              <RenderInput
                name="education"
                type="text"
                placeholder="Education "
                label="Education"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="fatherMobileNo"
                type="text"
                placeholder="+92 xxxxxxxxxx "
                label="MobileNo"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="profession"
                type="text"
                placeholder="Manager etc... "
                label="Profession"
                formik={formik}
              />
              <RenderInput
                name="income"
                type="number"
                placeholder="50000"
                label="Income"
                formik={formik}
              />
            </div>
            <FormTitle number={4} content={"Mother Information"} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-6 py-10 border-t border-t-[#212229]">
              <RenderInput
                name="motherName"
                type="text"
                placeholder="MotherName "
                label="MotherName"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="motherNationalId"
                type="number"
                placeholder="Mother National Id "
                label="Mother National Id"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="motherOccupation"
                type="text"
                placeholder="Occupation "
                label="Occupation"
                formik={formik}
              />
              <RenderInput
                name="motherEducation"
                type="text"
                placeholder="Education "
                label="Education"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="motherMobileNo"
                type="text"
                placeholder="+92 xxxxxxxxxx "
                label="MobileNo"
                formik={formik}
                isRequired={true}
              />
              <RenderInput
                name="motherProfession"
                type="text"
                placeholder="Manager etc... "
                label="Profession"
                formik={formik}
              />
              <RenderInput
                name="motherIncome"
                type="number"
                placeholder="50000"
                label="Income"
                formik={formik}
              />
            </div>

            <div className="flex justify-center py-10">
              <SubmitButton text={"Add"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
