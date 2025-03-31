import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation } from "@tanstack/react-query";

export const getAppliedStatus = () => {
  return api.get(`${apiConstantsURL.scholarships.overallAppliedStatus}`);
};

export const usegetAppliedStatus = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getAppliedStatus,
  });
};
