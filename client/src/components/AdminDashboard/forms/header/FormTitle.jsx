import React from "react";

const FormTitle = ({number,content}) => {
  return (
    <div className="content flex items-center gap-3">
      <div className="circle bg-[#212229] w-6 h-6 rounded-full flex justify-center items-center">
        <p className="text-white font-bold">{number}</p>
      </div>
      <h1 className="text-[#212229] font-semibold">{content}</h1>
    </div>
  );
};

export default FormTitle;
