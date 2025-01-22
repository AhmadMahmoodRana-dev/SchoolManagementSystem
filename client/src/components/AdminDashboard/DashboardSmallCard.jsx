import React from "react";
import { Card } from "../ui/card";
import cards from "@/utils/AdminDashboardCardData";
export const SmallCard = ({ bgCard, icon, total, thisMonth, heading }) => {
  console.log(bgCard);
  return (
    <Card
      className={`min-w-[290px] dark:shadow-none dark:border-none 2xl:min-w-[250px] xl:min-w-[200px] w-[23%] card h-auto min-h-[150px] rounded-lg px-3 py-5 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-300 `}
      style={{ backgroundColor: bgCard }}
    >
      <h1 className="text-white font-semibold text-md tracking-wide">
        {heading}
      </h1>
      <div className="flex items-center justify-between">
        {icon}
        <h1 className="text-white font-bold text-2xl">{total}</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-white text-sm font-semibold">This Month</h1>
        <h3 className="text-white">{thisMonth}</h3>
      </div>
    </Card>
  );
};

export const DashboardSmallCardContainer = () => {
  return (
    <div className="flex gap-5 w-full justify-center items-center  flex-wrap pt-10 px-3">
      {cards.map((card, index) => {
        return <SmallCard key={index} {...card} />;
      })}
    </div>
  );
};
