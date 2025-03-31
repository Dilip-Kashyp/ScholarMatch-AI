// import { apiClient } from "@/helper";
import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const getAllScholarshipsHandler = (searchQuery) => {
  return api.post(`${apiConstantsURL.users.scholarships}`, searchQuery);
};

export const useGetSearchedScholarships = ({ mutationConfig }) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: ["scholarships"] });
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getAllScholarshipsHandler,
  });
};

export const useGetAllScholarships = (queryConfig) => {
  const { onSuccess, onError, ...restConfig } = queryConfig || {};

  return useQuery({
    queryKey: ["scholarships"],
    queryFn: () => getAllScholarshipsHandler(),
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
