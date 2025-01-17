import React from "react";

const OptionalShownComponent = () => {
  return (
    <div className="options flex gap-3 justify-center">
      <div className="options2 flex justify-center items-center gap-2 ">
        <div className="w-5 h-2 rounded-lg bg-blue-600"></div>
        <p className="text-sm text-blue-600">Required*</p>
      </div>
      <div className="options2 flex justify-center items-center gap-2 ">
        <div className="w-5 h-2 rounded-lg bg-[#8891aa]"></div>
        <p className="text-sm text-[#8891aa]">Optional</p>
      </div>
    </div>
  );
};

export default OptionalShownComponent;
