import React, { useState } from "react";
import CommonHeader from "../AdminDashboard/forms/header/CommonHeader";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  const StudentData = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      registrationNo: "R001",
      checkIn: "2022-01-01",
      checkOut: "2022-01-15",
      Date: "2022-01-01",
    },
    {
      id: 2,
      name: "John Doe",
      username: "johndoe",
      registrationNo: "R001",
      checkIn: "2022-01-01",
      checkOut: "2022-01-15",
      Date: "2022-01-01",
    },
    {
      id: 3,
      name: "John Doe",
      username: "johndoe",
      registrationNo: "R001",
      checkIn: "2022-01-01",
      checkOut: "2022-01-15",
      Date: "2022-01-01",
    },
    {
      id: 4,
      name: "John Doe",
      username: "johndoe",
      registrationNo: "R001",
      checkIn: "2022-01-01",
      checkOut: "2022-01-15",
      Date: "2022-01-01",
    },
    {
      id: 5,
      name: "John Doe",
      username: "johndoe",
      registrationNo: "R001",
      checkIn: "2022-01-01",
      checkOut: "2022-01-15",
      Date: "2022-01-01",
    },
    {
      id: 6,
      name: "John Doe",
      username: "johndoe",
      registrationNo: "R001",
      checkIn: "2022-01-01",
      checkOut: "2022-01-15",
      Date: "2022-01-01",
    },
  ];

  const [isCheckIn, setIsCheckIn] = useState(false);

  return (
    <div className="w-full h-screen">
      <div className="Attendence w-full flex gap-4">
        <CommonHeader
          firstName={"Attendence"}
          SecondName={user?.username.slice(0, -4)}
        />
        {isCheckIn ? (
          <button
            onClick={() => setIsCheckIn(!isCheckIn)}
            className="dark:bg-blue-800/20 w-[120px] rounded-lg dark:text-blue-400 hover:opacity-50 transition-all ease-in-out duration-500"
          >
            Check Out
          </button>
        ) : (
          <button
            onClick={() => setIsCheckIn(!isCheckIn)}
            className="dark:bg-blue-800/20 w-[120px] rounded-lg dark:text-blue-400 hover:opacity-50 transition-all ease-in-out duration-500"
          >
            Check In
          </button>
        )}
      </div>
      {/* TABLE */}
      <div className="main-table-container flex pt-10">
        <div class="relative overflow-x-auto w-[70%]">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-blue-600 uppercase bg-gray-50  dark:bg-transparent dark:border-blue-400 border-2">
              <tr>
                <th scope="col" class="px-4 py-3">
                  SR.No
                </th>
                <th scope="col" class="px-4 py-3">
                  Student Name
                </th>
                <th scope="col" class="px-4 py-5">
                  UserName
                </th>
                <th scope="col" class="px-4 py-5">
                  Registeration Number
                </th>
                <th scope="col" class="px-4 py-5">
                  Check In
                </th>
                <th scope="col" class="px-4 py-5">
                  Check Out
                </th>
                <th scope="col" class="px-4 py-5">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {StudentData.map((val, ind) => {
                return (
                  <tr class="bg-white border-b  dark:bg-transparent dark:border-blue-400 border-2 text-center">
                    <td class=" py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {ind + 1}
                    </td>
                    <td class=" py-3">{val.name}</td>
                    <td class=" py-3">{val.username}</td>
                    <td class="py-3">{val.registrationNo}</td>
                    <td class="py-3">{val.checkIn}</td>
                    <td class="py-3">{val.checkOut}</td>
                    <td class="py-3 pr-2">{val.Date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* END OF SEARCH */}
    </div>
  );
};

export default Dashboard;
