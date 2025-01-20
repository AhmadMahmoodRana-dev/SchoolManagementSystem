import useApisStore from "@/store/Apis.store";
import React, { useEffect } from "react";
import DataShownDiv from "../dataShowDiv/DataShownDiv";
import CommonHeader from "../header/CommonHeader";
import SearchInput from "../Input/SearchInput";
import { HiOutlineRefresh } from "react-icons/hi";

const ShowStudent = () => {
  const { getData, fetchdata } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/students", "students");
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <CommonHeader firstName={"Students"} SecondName={"All Students"} />
      <div className="w-full bg-[#f6f7fb] h-auto min-h-screen dark:bg-gray-700/20">
      <div className="search-fiels-container w-full flex justify-end items-center gap-10 pr-16">
        <SearchInput placeholder="Search Class" />
        <button className="flex rounded-3xl items-center justify-center px-5 py-3 bg-[#3144de] text-white font-semibold mt-10 gap-2">
          <HiOutlineRefresh />
          Refresh
        </button>
      </div>
        <div className=" grid grid-cols-5 px-4 pt-4">
          {fetchdata?.students?.map((item, index) => {
            return (
              <DataShownDiv
                key={index}
                name={item?.studentName}
                role={item?.registrationNo}
                url={"http://localhost:4000/api/form/students/"}
                id={item?._id}
                key1={"students"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowStudent;
