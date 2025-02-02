import { Drawer as MuiDrawer } from "@mui/material";

function Drawer({ props, children }) {
  return <MuiDrawer {...props}>{children}</MuiDrawer>;
}

export default Drawer;
