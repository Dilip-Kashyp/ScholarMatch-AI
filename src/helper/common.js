import {
  PRIVATE_ROUTES_CONFIG,
  PRIVATE_PUBLIC_ROUTES_CONFIG,
  NON_PRIVATE_PUBLIC_ROUTES_CONFIG,
  LOCAL_STORAGE_KEY,
} from "@/constants";
import { getItem } from "./cookieStorage";

export function constructClassName(classNames) {
  return Array.from(new Set(classNames))
    .filter((className) => className && className !== "")
    .join(" ");
}

export function isUserAuthenticated() {
  const accessToken = getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  return accessToken !== "";
}

export function isUserAuthenticatedWithServer(accessTokenFromServer) {
  return accessTokenFromServer !== "" || isUserAuthenticated();
}

export function isPrivateRoute(routePath) {
  return PRIVATE_ROUTES_CONFIG.includes(routePath);
}

export function isNonPrivateRoute(routePath) {
  return NON_PRIVATE_PUBLIC_ROUTES_CONFIG.includes(routePath);
}

export function isPrivateAndPublicRoute(routePath) {
  return PRIVATE_PUBLIC_ROUTES_CONFIG.includes(routePath);
}

export function isRouteAuthenticated(routePath) {
  if (isUserAuthenticated()) {
    const isRoutePrivate = isPrivateRoute(routePath);
    if (!isRoutePrivate) {
      return isPrivateAndPublicRoute(routePath);
    }
    return isRoutePrivate;
  } else {
    return false;
  }
}
