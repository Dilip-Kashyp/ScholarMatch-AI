import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation } from "@tanstack/react-query";

export const useGetPersonalizedScholarships = () => {
  return api.get(`${apiConstantsURL.scholarships.personalizedScholarships}`);
};

export const usePersonalizedScholarships = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: useGetPersonalizedScholarships,
  });
};
