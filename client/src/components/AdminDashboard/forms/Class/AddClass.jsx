import React, { useEffect, useState } from "react";
import CommmonHeader from "../header/CommonHeader";
import OptionalShownComponent from "../header/OptionalShownComponent";
import { useFormik } from "formik";
import classFormSchema from "@/schemas/AddClassSchema";
import RenderInput from "../Input/RenderInput";
import RenderSelect from "../Select/RenderSelect";
import useApisStore from "@/store/Apis.store";
import { FaPlus } from "react-icons/fa";

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
      setData("http://localhost:4000/api/form/classes", values);
      resetForm();
    },
  });

  return (
    <div className="w-full h-[84vh] bg-[#f6f7fb]">
      <CommmonHeader firstName={"Classes"} SecondName={"Add New Class"} />
      <div className="lg:w-[50%] w-full min-h-[50vh] h-auto bg-white mt-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-semibold text-gray-800">Add New Class</h1>
          <p className="text-gray-500 text-sm mt-1">Fill in the details to create a new class</p>
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
            <button
              type="submit"
              className="bg-blue-600 text-white py-2.5 px-8 rounded-lg text-[0.95rem] font-medium flex gap-2 items-center hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaPlus className="text-sm" />
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
