import { Tooltip as MUITooltip } from "@mui/material";

function Tooltip({ title, children }) {
  return (
    <MUITooltip title={title} placement="right" arrow>
      {children}
    </MUITooltip>
  );
}

export default Tooltip;
