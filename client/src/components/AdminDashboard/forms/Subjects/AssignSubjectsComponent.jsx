import React, { useEffect, useState } from "react";
import CommmonHeader from "../header/CommonHeader";
import OptionalShownComponent from "../header/OptionalShownComponent";
import { useFormik } from "formik";
import RenderInput from "../Input/RenderInput";
import RenderSelect from "../Select/RenderSelect";
import useApisStore from "@/store/Apis.store";
import SubmitButton from "../buttons/SubmitButton";
import subjectFormSchema from "@/schemas/AddSubjectSchema";

const AssignSubjectsComponent = () => {
  const { getData, fetchdata, setData } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/classes", "classes");
  }, []);

  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    const formattedData = fetchdata?.classes?.map((data) => ({
      value: data.classesName,
      label: data.classesName,
    }));

    setSelectData(formattedData);
  }, [fetchdata]);

  // FORM
  const formik = useFormik({
    initialValues: {
      subjectName: "",
      subjectMarks: "",
      subjectClassName: "",
    },
    validationSchema: subjectFormSchema,
    onSubmit: (values, { resetForm }) => {
      setData("http://localhost:4000/api/form/subjects", values, "subjects");
      resetForm();
    },
  });

  return (
    <>
      <CommmonHeader firstName={"Subjects"} SecondName={"Assign New Subject"} />
      <div className="w-full h-[84vh] bg-[#f6f7fb] mt-6 dark:bg-gray-700/20">
        <div className="w-full h-full flex justify-center px-3">
          <div className="w-[50%]  max-h-[60vh] h-auto bg-white mt-6 rounded-xl border border-gray-100 shadow-sm dark:bg-transparent dark:border-none">
            <div className="p-6 border-b border-gray-100 dark:border-none">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-blue-400">
                Add New Subject
              </h1>
              <p className="text-gray-500 dark:text-blue-400 text-sm mt-1">
                Fill in the details to create a new subject
              </p>
            </div>
            <OptionalShownComponent />
            <form
              onSubmit={formik.handleSubmit}
              className="p-6 flex flex-col gap-6"
            >
              <RenderInput
                name="subjectName"
                type="text"
                placeholder="Name of Subject"
                label="Subject Name*"
                isRequired={true}
                formik={formik}
              />
              <RenderInput
                name="subjectMarks"
                type="number"
                placeholder="Enter Subject Marks"
                label="Subject Marks*"
                isRequired={true}
                formik={formik}
              />
              <RenderSelect
                name="subjectClassName"
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

export default AssignSubjectsComponent;
