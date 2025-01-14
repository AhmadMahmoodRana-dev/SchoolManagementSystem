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
  const { getData, fetchdata,setData } = useApisStore();
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
      setData("http://localhost:4000/api/form/classes",values)
      resetForm();
    },
  });

  return (
    <div className="w-full h-screen bg-[#f6f7fb] px-6 flex flex-col items-center py-10">
      <CommmonHeader firstName={"Classes"} SecondName={"Add New Class"} />
      <div className="w-[50%] min-h-[50vh] h-auto bg-white mt-6  border rounded-2xl py-4">
        <h1 className="text-black font-bold text-2xl tracking-tight text-center py-2">
          Add New Class
        </h1>
        <OptionalShownComponent />
        <form
          onSubmit={formik.handleSubmit}
          className="px-8 flex flex-col  gap-5 pt-10 justify-center items-center"
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
          <button
            type="submit"
            className="bg-[#ffbc5c] py-2 px-6 rounded-3xl text-xl flex gap-3 justify-center items-center hover:opacity-50"
          >
            <FaPlus />
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
