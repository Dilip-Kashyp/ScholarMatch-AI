import { apiConstantsURL } from "@/constants";
import { api } from "@/helper";
import { useMutation } from "@tanstack/react-query";

export const getCreateProfile = ({ data }) => {
  return api.post(`${apiConstantsURL.users.createProfile}`, data);
};

export const useGetCreateProfile = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getCreateProfile,
  });
};

export const getProfileDetails = () => {
  return api.get(`${apiConstantsURL.users.profileData}`);
};

export const useProfileDetails = ({ mutationConfig }) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (...args) => {
      onError?.(...args);
    },
    ...restConfig,
    mutationFn: getProfileDetails,
  });
};
