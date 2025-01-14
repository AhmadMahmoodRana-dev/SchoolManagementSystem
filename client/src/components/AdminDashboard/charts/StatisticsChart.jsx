import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Aug 2024", Expenses: 0, Income: 0 },
  { month: "Sep 2024", Expenses: 0, Income: 0 },
  { month: "Oct 2024", Expenses: 0, Income: 0 },
  { month: "Nov 2024", Expenses: 0, Income: 0 },
  { month: "Dec 2024", Expenses: 0, Income: 0 },
  { month: "Jan 2025", Expenses: 0, Income: 0 },
];

const StatisticsChart = () => {
  return (
    <div className="w-[100%] bg-white rounded-lg h-[400px] justify-center  flex flex-col">
      <h3 className="ml-12">Statistics</h3>
      <div className="pr-6 flex justify-center items-center w-full">
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[-1, 1]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Expenses" stroke="#ff8080" />
          <Line type="monotone" dataKey="Income" stroke="#8080ff" />
        </LineChart>
      </div>
    </div>
  );
};

export default StatisticsChart;
