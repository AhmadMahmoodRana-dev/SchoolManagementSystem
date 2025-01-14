import React, {  useEffect } from "react";
import SearchInput from "../Input/SearchInput";
import { HiOutlineRefresh } from "react-icons/hi";
import useApisStore from "@/store/Apis.store";
import DataShownDiv from "../dataShowDiv/DataShownDiv";
import CommonHeader from "../header/CommonHeader";
const ShownEmployee = () => {
  const { getData, fetchdata } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/employee", "employee");
  }, []);

  return (
    <div className="w-full h-screen bg-[#f6f7fb] px-6 pt-5">
      <CommonHeader firstName="Employee" SecondName="All Employees" />

      {/* Search Inputs */}
      <div className="search-fiels-container w-full flex justify-end items-center gap-10 pr-16">
        <SearchInput placeholder="Search Employee" />
        <button className="flex rounded-3xl items-center justify-center px-5 py-3 bg-[#3144de] text-white font-semibold mt-10 gap-2">
          <HiOutlineRefresh />
          All
        </button>
      </div>
      <div className="boxes-container grid grid-cols-6 gap-4 pt-10">
        {fetchdata?.employee?.map((data, index) => {
          return (
            <DataShownDiv
              key={index}
              key1={"employee"}
              name={data?.employeeName}
              role={data?.employeeRole}
              id={data?._id}
              url={"http://localhost:4000/api/form/employee/"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShownEmployee;
