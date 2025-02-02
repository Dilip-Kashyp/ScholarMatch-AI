import React from "react";
import { Stack, Typography } from "@mui/material";

const TextWithIcon = ({ textWithIconProps, icon, textProps }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      {...textWithIconProps}
    >
      {icon}
      <Typography {...textProps} />
    </Stack>
  );
};

export default TextWithIcon;
