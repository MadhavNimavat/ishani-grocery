import { useField } from "formik";
const InputField = ({ leftIcon, rightIcon, placeholder, inputProps }) => {
  const [field, meta] = useField(inputProps);

  const haveError = meta.touched && meta.error;

  return (
    <div className="w-full">
      <div
        className={`bg-background-variantTwo rounded-lg py-4 px-4 flex items-center ${
          haveError ? "border border-primary" : ""
        }`}
      >
        {leftIcon}
        <input
          className="flex-1 h-full px-5 bg-transparent border-none focus:outline-none text-white text-lg font-serif"
          type="text"
          {...field}
          {...inputProps}
          placeholder={placeholder}
        />
        {rightIcon}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-base text-primary mt-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
