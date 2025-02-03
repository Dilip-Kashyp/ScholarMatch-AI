import { apiClient } from "@/helper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function getAllScholarshipsHandler(searchQuery) {
  const response = await apiClient({
    url: "/scholarships/all-scholarships",
    method: "POST",
    body: { searchQuery },
  });
  return response;
}

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
  });
};
