import React from "react";
import { FormControl, Button as MUIButton } from "@mui/material";

function Button({ buttonProps, formControlProps, onClick }) {
  return (
    <FormControl {...formControlProps}>
      <MUIButton {...buttonProps} onClick={onClick} />
    </FormControl>
  );
}

export default Button;
