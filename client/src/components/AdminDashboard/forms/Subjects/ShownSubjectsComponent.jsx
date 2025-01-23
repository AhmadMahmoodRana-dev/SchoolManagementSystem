import React, { useEffect } from "react";
import CommonHeader from "../header/CommonHeader";
import SearchInput from "../Input/SearchInput";
import { HiOutlineRefresh } from "react-icons/hi";
import DataShownDiv from "../dataShowDiv/DataShownDiv";
import useApisStore from "@/store/Apis.store";

const ShownSubjectsComponent = () => {
  const { getData, fetchdata } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/form/subjects", "subjects");
  }, []);
  return (
    <>
      <CommonHeader firstName="Subjects" SecondName="All Subjects" />
      <div className="w-full bg-[#19202f] h-screen mt-6">
        <div className="search-fiels-container w-full flex justify-end items-center gap-10 pr-16">
          <SearchInput placeholder="Search Subject" />
          <button className="flex rounded-3xl items-center justify-center px-5 py-3 bg-[#3144de] text-white font-semibold mt-10 gap-2">
            <HiOutlineRefresh />
            Refresh
          </button>
        </div>
        <div className="boxes-container px-6 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4 pt-10">
          {fetchdata?.subjects?.map((data, index) => {
            return (
              <DataShownDiv
                key={index}
                key1={"subjects"}
                name={data?.subjectName}
                role={data?.subjectClassName}
                id={data?._id}
                url={"http://localhost:4000/api/form/subjects/"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShownSubjectsComponent;
