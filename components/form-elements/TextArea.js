// @ts-nocheck
import React from "react";
import { Field, useField, ErrorMessage } from "formik";

const TextArea = ({ label, ...rest }) => {
  const [field, meta] = useField(rest);

  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{label}</label>
      <Field
        name={field.name}
        as="textarea"
        placeholder=""
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
      />
      <ErrorMessage component="div" name={field.name} className="my-error" />
    </div>
  );
};

export default TextArea;
