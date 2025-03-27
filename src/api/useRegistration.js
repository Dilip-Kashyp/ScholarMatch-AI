// import { apiClient } from "@/helper";
import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation } from "@tanstack/react-query";

export const getRegistrationHandler = ({ data }) => {
  return api.post(`${apiConstantsURL.users.register}`, data);
};

export const useRegistrationHandler = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getRegistrationHandler,
  });
};
