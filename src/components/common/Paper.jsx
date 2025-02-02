import { Paper as MUIPaper } from "@mui/material";

function Paper({ paperProps, children }) {
  return <MUIPaper {...paperProps}>{children}</MUIPaper>;
}

export default Paper;
