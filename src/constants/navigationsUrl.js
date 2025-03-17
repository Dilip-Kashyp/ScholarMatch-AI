export const LANDING_URL = "/";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/registration";
export const FORGOT_PASSWORD_URL = "/forgot-password";
export const RESET_PASSWORD = "/reset-password";
export const HOME_URL = "/home";
export const DASHBOARD_URL = "/dashboard";
export const COURSES_URL = "/courses";
export const COURSES_DETAILS_URL = "/course-details";
export const ACCOUNT_VERIFICATION_URL = "/account-verification";

export const PRIVATE_ROUTES_CONFIG = [
  HOME_URL,
  DASHBOARD_URL,
  COURSES_URL,
  COURSES_DETAILS_URL,
];

export const PRIVATE_PUBLIC_ROUTES_CONFIG = [
  LANDING_URL,
  LOGIN_URL,
  REGISTER_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD,
  ACCOUNT_VERIFICATION_URL,
];

export const NON_PRIVATE_PUBLIC_ROUTES_CONFIG = [
  LOGIN_URL,
  REGISTER_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD,
  // ENTER_OTP,
  ACCOUNT_VERIFICATION_URL,
];
