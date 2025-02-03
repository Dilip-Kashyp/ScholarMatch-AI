import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useCallback, useMemo } from "react";

function Dropdown({
  options = [],
  inputLabelProps,
  formControlProps,
  selectProps,
  onChange,
  value,
}) {
  const getSelectedOptionObject = useCallback(
    (valueToBeSearched) => {
      return options?.find(({ value }) => value === valueToBeSearched);
    },
    [options]
  );

  const selectedValue = useMemo(() => {
    const optionMatched = getSelectedOptionObject(value);
    return optionMatched?.value || "";
  }, [getSelectedOptionObject, value]);
  return (
    <FormControl {...formControlProps}>
      <InputLabel {...inputLabelProps} />
      <Select
        {...selectProps}
        onChange={onChange}
        value={selectedValue}
        renderValue={(valueToBeRendered) => {
          const selectedOption = getSelectedOptionObject(valueToBeRendered);
          return (
            <span>
              <When condition={selectedOption?.icon !== undefined}>
                <span className={"mr-2"}>{selectedOption?.icon}</span>
              </When>
              {selectedOption?.label}
            </span>
          );
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
