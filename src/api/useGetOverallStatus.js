import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation } from "@tanstack/react-query";

export const getOverallStatus = () => {
  return api.get(`${apiConstantsURL.scholarships.overallStatus}`);
};

export const useGetOverallStatus = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getOverallStatus,
  });
};
