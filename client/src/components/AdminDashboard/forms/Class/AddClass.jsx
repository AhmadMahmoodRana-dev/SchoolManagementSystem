import React, { useEffect, useState } from "react";
import CommmonHeader from "../header/CommonHeader";
import OptionalShownComponent from "../header/OptionalShownComponent";
import { useFormik } from "formik";
import classFormSchema from "@/schemas/AddClassSchema";
import RenderInput from "../Input/RenderInput";
import RenderSelect from "../Select/RenderSelect";
import useApisStore from "@/store/Apis.store";
import { FaPlus } from "react-icons/fa";
import SubmitButton from "../buttons/SubmitButton";

const AddClass = () => {
  // OPTIONS
  const { getData, fetchdata, setData } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/employee", "employee");
  }, []);

  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    if (fetchdata?.employee) {
      const filteredData = fetchdata.employee.filter(
        (employee) => employee.employeeRole === "Teacher"
      );

      const formattedData = filteredData.map((data) => ({
        value: data._id,
        label: data.employeeName,
      }));

      setSelectData(formattedData);
    }
  }, [fetchdata]);

  // FORM

  const formik = useFormik({
    initialValues: {
      classesName: "",
      monthlyTutionFees: "",
      classTeacherId: "",
    },
    validationSchema: classFormSchema,
    onSubmit: (values, { resetForm }) => {
      setData("http://localhost:4000/api/form/classes", values, "classes");
      resetForm();
    },
  });

  return (
    <>
      <CommmonHeader firstName={"Classes"} SecondName={"Add New Class"} />
      <div className="w-full h-[84vh] bg-[#f6f7fb] mt-6">
        <div className="w-full h-full flex justify-center px-3">
          <div className="w-[50%]  max-h-[60vh] h-auto bg-white mt-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h1 className="text-xl font-semibold text-gray-800">
                Add New Class
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Fill in the details to create a new class
              </p>
            </div>
            <OptionalShownComponent />
            <form
              onSubmit={formik.handleSubmit}
              className="p-6 flex flex-col gap-6"
            >
              <RenderInput
                name="classesName"
                type="text"
                placeholder="Name of Class"
                label="Class Name*"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="monthlyTutionFees"
                type="number"
                placeholder="Enter Your Monthly Tution Fees"
                label="Monthly Tution Fees*"
                isRequired={true}
                formik={formik}
              />
              <RenderSelect
                name="classTeacherId"
                options={selectData}
                label="Select Class Teacher*"
                formik={formik}
              />
              <div className="flex justify-end mt-4">
                <SubmitButton text={"Create"} />
              </div>
            </form>
          </div>
          <div className="w-[50%] max-h-[60vh] mt-6 h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.457267535097!2d74.30902627565177!3d31.511598674217936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919038080f2fa49%3A0xae4788c491fe91!2sVision%20Plus!5e0!3m2!1sen!2s!4v1737096615140!5m2!1sen!2s"
              className="w-full h-full rounded-xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClass;
