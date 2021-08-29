import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...rest }) => {
  const [field, meta] = useField(rest);

  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...rest}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="my-error" />
    </div>
  );
};

export default TextField;
