import React, { useContext } from "react";
import CommonHeader from "../AdminDashboard/forms/header/CommonHeader";
import { Context } from "@/context/Context";

const Dashboard = () => {
  const { checkOutFunction, checkInFunction, isCheckIn, storeSingleUserAttendence, user } = useContext(Context)


  return (
    <>
      <div className="Attendence w-full flex gap-4">
        <CommonHeader
          firstName="Attendance"
          SecondName={user?.username.slice(0, -4)}
        />
        {isCheckIn ? (
          <button
            onClick={checkOutFunction}
            className="dark:bg-red-800/20 w-[120px] rounded-lg dark:text-red-400 hover:opacity-50 transition-all ease-in-out duration-500"
          >
            Check Out
          </button>
        ) : (
          <button
            onClick={checkInFunction}
            className="dark:bg-blue-800/20 w-[120px] rounded-lg dark:text-blue-400 hover:opacity-50 transition-all ease-in-out duration-500"
          >
            Check In
          </button>
        )}
      </div>

      {/* ########    TABLE    ######### */}
      <div class="relative overflow-x-auto mt-10 dark:bg-[#19202f] min-h-screen h-auto px-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6 ">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-5 py-5">
                SR.No
              </th>
              <th scope="col" class="px-5 py-5">
                UserName
              </th>
              <th scope="col" class="px-5 py-5">
                Role
              </th>
              <th scope="col" class="px-5 py-5">
                User_Id
              </th>
              <th scope="col" class="px-5 py-5">
                Date
              </th>
              <th scope="col" class="px-5 py-5">
                Check_In_Time
              </th>
              <th scope="col" class="px-5 py-5">
                Check_Out_Time
              </th>
              <th scope="col" class="px-5 py-5">
                Total_Time
              </th>
            </tr>
          </thead>
          <tbody>
            {
              storeSingleUserAttendence.map((data, ind) => {
                return (
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {ind + 1}
                    </th>
                    <td class="px-5 py-4">{user?.username}</td>
                    <td class="px-5 py-4">{user?.role}</td>
                    <td class="px-5 py-4">{user?.id}</td>
                    <td class="px-5 py-4">{data?.date?.slice(0, 16)}</td>
                    <td class="px-5 py-4">{data?.checkInTime?.slice(17, 30)}</td>
                    <td class="px-5 py-4">{data?.checkOutTime?.slice(17, 30)}</td>
                    <td class="px-5 py-4">{data?.totalTime}</td>
                  </tr>

                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
