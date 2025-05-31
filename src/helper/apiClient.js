import Axios from "axios";
import { LOCAL_STORAGE_KEY } from "@/constants";
import { getItem } from "./cookieStorage";

function authRequestInterceptor(config) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  const accessToken = getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}

export const api = Axios.create({
  // baseURL: "http://localhost:5400/api/v1",
  baseURL: "http://3.108.229.109/api/v1",
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // if (error.response?.status === 401) {
    //   if (typeof window !== "undefined") {
    //     const searchParams = new URLSearchParams();
    //     const redirectTo = searchParams.get("redirectTo");
    //     if (redirectTo) {
    //       window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    //     } else {
    //       window.location.href = "/auth/login";
    //     }
    //   }
    // }

    return Promise.reject(error);
  }
);

export function getresponseError(error) {
  const isString = typeof error?.response?.data?.message === "string";
  return {
    message: isString
      ? error?.response?.data?.message || "Internal Server Error"
      : "Internal Server Error",
  };
}
