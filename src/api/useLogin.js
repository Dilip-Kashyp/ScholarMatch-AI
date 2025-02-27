import { apiClient } from "@/helper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function getLoginHandler({ email, password }) {
  const response = await apiClient({
    url: "/users/login",
    method: "POST",
    body: { email, password },
  });
  return response;
}

export const useLoginHandler = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getLoginHandler,
  });
};
