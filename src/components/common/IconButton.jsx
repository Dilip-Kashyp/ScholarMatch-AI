import { IconButton as MUIIconButton } from "@mui/material";

function IconButton({ children, ...props }) {
  return <MUIIconButton {...props}>{children}</MUIIconButton>;
}

export default IconButton;
