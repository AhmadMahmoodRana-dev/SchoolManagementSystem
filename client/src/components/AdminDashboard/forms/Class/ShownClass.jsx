import React, { useEffect } from "react";
import SearchInput from "../Input/SearchInput";
import { HiOutlineRefresh } from "react-icons/hi";
import useApisStore from "@/store/Apis.store";
import DataShownDiv from "../dataShowDiv/DataShownDiv";
import CommonHeader from "../header/CommonHeader";
const ShownClass = () => {
  const { getData, fetchdata } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/classes", "classes");
  }, []);

  return (
    <>
      <CommonHeader firstName="Classes" SecondName="All Classes" />
      <div className="w-full h-screen bg-[#f6f7fb] dark:bg-gray-700/20 px-6 mt-5">
        {/* Search Inputs */}
        <div className="search-fiels-container w-full flex justify-end items-center gap-10 pr-16">
          <SearchInput placeholder="Search Class" />
          <button className="flex rounded-3xl items-center justify-center px-5 py-3 bg-[#3144de] text-white font-semibold mt-10 gap-2">
            <HiOutlineRefresh />
            Refresh
          </button>
        </div>
        <div className="boxes-container grid grid-cols-5 gap-4 pt-10">
          {fetchdata?.classes?.map((data, index) => {
            return (
              <DataShownDiv
                key={index}
                key1={"classes"}
                name={data?.classesName}
                role={data?.classTeacherId}
                id={data?._id}
                url={"http://localhost:4000/api/form/classes/"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShownClass;
