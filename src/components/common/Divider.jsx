import { Divider as MUIDivider } from "@mui/material";

function Divider({ children, ...props }) {
  return <MUIDivider {...props}>{children}</MUIDivider>;
}

export default Divider;
