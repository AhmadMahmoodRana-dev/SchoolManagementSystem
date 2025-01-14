  const RenderInput = ({name, type, placeholder, label, isRequired,formik}) => {
    return (
        <div className="w-full grid relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`border py-3 rounded-3xl outline-none pl-4 ${
            formik?.touched[name] && formik?.errors[name]
              ? "border-red-500"
              : "border-[#7068e4]"
          }`}
          onChange={formik?.handleChange}
          onBlur={formik?.handleBlur}
          value={formik?.values[name]}
        />
        <h1
          className={`absolute top-[-10px] text-xs ${
            isRequired ? "bg-[#7068e4]" : "bg-[#8891aa]"
          } text-white px-3 ml-4 rounded-3xl`}
        >
          {label}
        </h1>
        {formik?.touched[name] && formik?.errors[name] && (
          <p className="text-red-500 text-sm mt-1">{formik?.errors[name]}</p>
        )}
      </div>
    )
  }
  
  export default RenderInput
  