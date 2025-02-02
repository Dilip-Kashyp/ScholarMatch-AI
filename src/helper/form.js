import { useFormik } from "formik";
import { useRef } from "react";

export function useForm(initialValues, onSubmit) {
  const isFormTriedToBeSubmitted = useRef(false);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, formikHelpers) => {
      isFormTriedToBeSubmitted.current = true;
      try {
        await formikHelpers.validateForm();
        await onSubmit({ values });
      } catch (e) {
        console.error(e, "Form Error");
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  function resetError() {
    isFormTriedToBeSubmitted.current = false;
    formik.setErrors({});
  }

  return {
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    resetError,
    isSubmitting: formik.isSubmitting,
    setFieldValue: formik.setFieldValue,
  };
}
