import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation } from "@tanstack/react-query";

export const getApplyScholarship = ({ data }) => {
  console.log("Apply scholarship data", data);
  return api.post(`${apiConstantsURL.scholarships.applyScholarship}`, data);
};

export const useApplyScholarship = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getApplyScholarship,
  });
};
