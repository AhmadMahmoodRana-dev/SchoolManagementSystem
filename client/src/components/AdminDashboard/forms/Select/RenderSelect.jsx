import React from "react";

const RenderSelect = ({ name, options, label,formik }) => {
  return (
    <div className="w-full grid relative">
      <select
        name={name}
        className={`border py-3 rounded-3xl outline-none pl-4 ${
          formik?.touched[name] && formik?.errors[name]
            ? "border-red-500"
            : "border-[#7068e4]"
        }`}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        value={formik?.values[name]}
      >
        <option value="">Select *</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <h1 className="absolute top-[-10px] text-xs bg-[#7068e4] text-white px-3 ml-4 rounded-3xl">
        {label}
      </h1>
      {formik?.touched[name] && formik?.errors[name] && (
        <p className="text-red-500 text-sm mt-1">{formik?.errors[name]}</p>
      )}
    </div>
  );
};

export default RenderSelect;
