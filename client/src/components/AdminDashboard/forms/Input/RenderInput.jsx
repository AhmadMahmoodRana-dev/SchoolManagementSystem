  const RenderInput = ({name, type, placeholder, label, isRequired, formik}) => {
  return (
    <div className="w-full grid relative">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 bg-white dark:bg-transparent dark:placeholder:text-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-600 dark:border-blue-600 ${
          formik?.touched[name] && formik?.errors[name]
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 hover:border-blue-400 focus:border-blue-600"
        }`}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        value={formik?.values[name]}
      />
      <h1
        className={`absolute top-[-10px] text-xs ${
          isRequired ? "bg-blue-600" : "bg-gray-500"
        } text-white px-3 ml-4 rounded-full shadow-sm transition-colors duration-200`}
      >
        {label}
      </h1>
      {formik?.touched[name] && formik?.errors[name] && (
        <p className="text-red-500 text-sm mt-1.5 ml-1">{formik?.errors[name]}</p>
      )}
    </div>
  )
}

export default RenderInput