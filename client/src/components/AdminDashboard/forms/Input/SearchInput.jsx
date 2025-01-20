import React from "react";

const SearchInput = ({placeholder}) => {
  return (
    <div className="w-[30%] relative mt-10">
      <input
        type="text"
        className="border py-3 rounded-3xl outline-none pl-4  w-full border-blue-600   placeholder:text-[#868e96]"
        placeholder={placeholder}
      />
      <h1
        className={`absolute top-[-10px] text-xs bg-blue-600 text-white px-3 ml-4 rounded-3xl`}
      >
        Search
      </h1>
    </div>
  );
};

export default SearchInput;
