import React from "react";

const RenderSelect = ({ name, options, label, formik }) => {
  return (
    <div className="w-full grid relative">
      <select
        name={name}
        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 bg-white dark:bg-transparent dark:placeholder:text-blue-600 appearance-none cursor-pointer focus:ring-2 focus:ring-blue-100 ${
          formik?.touched[name] && formik?.errors[name]
            ? "border-red-400 focus:border-red-500 dark:focus:border-red-500"
            : "border-gray-200 hover:border-blue-400 focus:border-blue-600 dark:border-blue-400 dark:focus:border-blue-600"
        }`}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        value={formik?.values[name]}
      >
        <option value="">Select *</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-2 text-black dark:bg-transparent">
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <h1 className="absolute top-[-10px] text-xs bg-blue-600 text-white px-3 ml-4 rounded-full shadow-sm transition-colors duration-200">
        {label}
      </h1>
      {formik?.touched[name] && formik?.errors[name] && (
        <p className="text-red-500 text-sm mt-1.5 ml-1">{formik?.errors[name]}</p>
      )}
    </div>
  );
};

export default RenderSelect;
