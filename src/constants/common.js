export const MENU_ITEMS = (isLoggedIn) => [
  ...(!isLoggedIn
    ? [{ id: "home", label: "Home", path: "/" }]
    : [{ id: "dashboard", label: "Dashboard", path: "/dashboard" }]),
  { id: "scholarships", label: "Scholarships", path: "/scholarships" },
  { id: "about", label: "About", path: "/about" },
  ...(isLoggedIn ? [{ id: "profile", label: "Profile", path: "profile" }] : []),
  {
    id: "auth",
    label: isLoggedIn ? "Logout" : "Login",
    path: isLoggedIn ? "/logout" : "/login",
  },
];

export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: "access_token",
};
