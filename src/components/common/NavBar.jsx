import { useRouter } from "next/router";
import { Toolbar, Box } from "@mui/material";
import { Button, Stack } from "@/components";
import { LOGIN_URL, MENU_ITEMS } from "@/constants";
import { NAVBAR_STACK_CONFIG } from "@/constants";
import { clearAllCookie, isUserAuthenticated, useNotification } from "@/helper";
function NavBar() {
  const router = useRouter();
  const { showNotification } = useNotification();
  function logoutUser() {
    clearAllCookie();
    showNotification({ message: "Logout successfully" });
    router.push(LOGIN_URL);
  }

  const isLoggedIn = isUserAuthenticated();
  return (
    <Stack
      stackProps={{
        backgroundColor: "#2c3e50",
        width: { xs: "90%", sm: "80%" },
        margin: "auto",
        marginTop: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "row",
          padding: { xs: "0px", sm: "12px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 0, sm: 6 },
            flexDirection: "row",
            width: "auto",
          }}
        >
          {MENU_ITEMS(isLoggedIn).map((item) => (
            <Button
              key={item.id}
              buttonProps={{
                children: item.label,
                ...NAVBAR_STACK_CONFIG,
              }}
              onClick={() => {
                if (item.id === "auth" && isLoggedIn) {
                  logoutUser();
                } else {
                  router.push(item.path);
                }
              }}
            />
          ))}
        </Box>
      </Toolbar>
    </Stack>
  );
}

export default NavBar;
