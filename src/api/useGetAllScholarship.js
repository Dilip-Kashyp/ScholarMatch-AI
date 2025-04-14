// import { apiClient } from "@/helper";
import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation, useQuery } from "@tanstack/react-query";

export const getAllScholarshipsHandler = ({ data }) => {
  console.log("data", data);
  return api.post(`${apiConstantsURL.scholarships.scholarships}`, data);
};

export const useGetAllScholarships = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getAllScholarshipsHandler,
  });
};
