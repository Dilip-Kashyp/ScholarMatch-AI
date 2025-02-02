import { Menu as MUIMenu } from "@mui/material";

function Menu({
  onMenuClick,
  handleClose,
  anchorEl,
  children,
  styles,
}) {
  const open = Boolean(anchorEl);

  return (
    <>
      <MUIMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={onMenuClick}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              ...(styles?.paperStyles || {}),
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </MUIMenu>
    </>
  );
}

export default Menu;
