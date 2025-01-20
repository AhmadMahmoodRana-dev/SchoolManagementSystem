import React from "react";
import { FaPlus } from "react-icons/fa";

const SubmitButton = ({text}) => {
  return (
    <button
      type="submit"
      className="bg-blue-600 text-white py-2.5 px-8 rounded-lg text-[0.95rem] font-medium flex gap-2 items-center hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <FaPlus className="text-sm" />
      {text}
    </button>
  );
};

export default SubmitButton;
