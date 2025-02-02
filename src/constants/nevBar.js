export const NAVBAR_CONFIG = {
  NAV_BAR_TITLE: (title) => ({
    buttonProps: {
      children: title,
      variant: "h6",
      color: "inherit",
      sx: {
        cursor: "pointer",
        fontSize: "1rem",
      },
      onClick: () => router.push("/"),
    },
  }),
};

export const NAVBAR_STACK_CONFIG = ({
  sx: {
    fontSize: { xs: "0.9rem", sm: "1rem" },
    width: { xs: "100%", sm: "auto" },
    padding: "10px 24px",
    color: "#ffffff",
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: 500,
    letterSpacing: "0.5px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transform: "translateY(-2px)",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  },
});
