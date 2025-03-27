import {  NextResponse } from "next/server";
import { LOGIN_URL, HOME_URL, DASHBOARD_URL } from "@/constants";
import { isNonPrivateRoute, isPrivateRoute } from "./helper";

export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: "access_token",
};

export function middleware(request) {
  const accessToken = request.cookies.get(
    LOCAL_STORAGE_KEY.ACCESS_TOKEN
  )?.value;

  let routeObj = {
    isRedirect: false,
    redirectUrl: "",
  };

  if (request.nextUrl.pathname.includes("/api/auth/")) {
    routeObj.isRedirect = false;
  } else if (isPrivateRoute(request.nextUrl.pathname) && !accessToken) {
    routeObj = {
      isRedirect: true,
      redirectUrl: LOGIN_URL,
    };
  } else if (accessToken && isNonPrivateRoute(request.nextUrl.pathname)) {
    // Logged in but routed non-private route.
    // Redirect it to the home overview
    routeObj = {
      isRedirect: true,
      redirectUrl: DASHBOARD_URL,
    };
  }

  if (routeObj.isRedirect) {
    return NextResponse.redirect(new URL(routeObj?.redirectUrl, request.url));
  } else {
    return NextResponse.next();
  }
}

