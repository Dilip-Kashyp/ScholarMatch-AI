import { useRouter } from "next/router";
import { Toolbar, Box } from "@mui/material";
import { Button, Stack } from "@/components";
import { MENU_ITEMS } from "@/constants";
import { NAVBAR_STACK_CONFIG } from "@/constants";
function NavBar() {
  const router = useRouter();
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
          padding: { xs: "2px", sm: "12px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "row",
            width: "auto",
          }}
        >
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.id}
              buttonProps={{
                children: item.label,
                ...NAVBAR_STACK_CONFIG,
              }}
              onClick={() => router.push(item.path)}
            />
          ))}
        </Box>
      </Toolbar>
    </Stack>
  );
}

export default NavBar;
