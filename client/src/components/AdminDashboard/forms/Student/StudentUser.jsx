import React, { useEffect, useState } from "react";
import CommonHeader from "../header/CommonHeader";
import SearchInput from "../Input/SearchInput";
import { HiOutlineRefresh } from "react-icons/hi";
import useApisStore from "@/store/Apis.store";
import DataShownDiv from "../dataShowDiv/DataShownDiv";

const StudentUser = () => {
  const { getData, fetchdata } = useApisStore();
  useEffect(() => {
    getData("http://localhost:4000/api/auth/login", "login");
  }, []);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (fetchdata?.login) {
      const filteredData = fetchdata.login.filter(
        (user) => user.role === "Students"
      );
      const formattedData = filteredData;
      setUserData(formattedData);
    }
  }, [fetchdata]);

  return (
    <>
      <CommonHeader firstName="Employees" SecondName="Users" />
      <div className="w-full bg-[#f6f7fb] dark:bg-gray-700/20 h-auto min-h-screen mt-6">
        <div className="search-fiels-container w-full flex justify-end items-center gap-10 pr-16">
          <SearchInput placeholder="Search Class" />
          <button className="flex rounded-3xl items-center justify-center px-5 py-3 bg-[#3144de] dark:bg-blue-600 hover:bg-[#2838c0] dark:hover:bg-blue-700 text-white font-semibold mt-10 gap-2 transition-colors">
            <HiOutlineRefresh />
            Refresh
          </button>
        </div>
        <div className="grid grid-cols-5 px-6 pt-4 gap-4">
          {userData?.map((value, index) => {
            return (
              <DataShownDiv
                key={index}
                name={value?.username}
                role={value?.role}
                id={value?._id}
                url={"http://localhost:4000/api/auth/login/"}
                key1={"login"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentUser;
