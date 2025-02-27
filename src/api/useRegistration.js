import { apiClient } from "@/helper";
import { useMutation } from "@tanstack/react-query";

async function getRegistrationHandler({ name, email, password }) {
  const response = await apiClient({
    url: "/users/register",
    method: "POST",
    body: { name, email, password },
  });
  return response;
}

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
