import { apiClient } from "@/helper";
import { useQuery } from "@tanstack/react-query";

async function getAllScholarshipsHandler() {
  const response = await apiClient({
    url: "/scholarship/all-scholarships",
    method: "GET",
  });
  return response;
}

export const useGetAllScholarships = () => {
  return useQuery({
    queryKey: ["scholarships"],
    queryFn: getAllScholarshipsHandler,
  });
};