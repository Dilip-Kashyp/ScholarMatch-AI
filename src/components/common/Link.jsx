import { Link as MUILink } from "@mui/material";

function Link({ linkProps, children }) {
  return <MUILink {...linkProps}>{children}</MUILink>;
}

export default Link;
