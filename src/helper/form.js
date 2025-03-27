"use client";
import { useRef } from "react";
import { useFormik } from "formik";

export function useForm({ initialValues, onSuccess }) {
  const isFormTriedToBeSubmitted = useRef(false);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        onSuccess({ values });
      } catch (e) {
        console.error(e, "Form Error");
      }
    },
  });

  return {
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    onSubmit: (event) => {
      isFormTriedToBeSubmitted.current = true;
      formik.handleSubmit(event);
    },

    onReset: formik.handleReset,
    formValuesObj: formik.values,
    setValues: formik.setValues,
  };
}
