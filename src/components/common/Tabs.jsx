import React, { useEffect, useState } from "react";
import { Tabs as MUITabs, Tab } from "@mui/material";
import When from "./When";

function CustomTabPanel(props) {
  const { children, value, selectedTab, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== selectedTab}
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...other}
    >
      <When condition={selectedTab === value}>{children}</When>
    </div>
  );
}

function Tabs({ items = [], tabsProps, handleTabChange }) {
  const [value, setValue] = useState(tabsProps?.defaultValue);

  useEffect(() => {
    setValue(tabsProps?.defaultValue);
  }, [tabsProps?.defaultValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTabChange?.(newValue);
  };

  return (
    <>
      <MUITabs {...tabsProps} value={value} onChange={handleChange}>
        {items.map((item) => (
          <Tab key={item.key} label={item.label} value={item.value} />
        ))}
      </MUITabs>
      <div className={"w-full"}>
        {items.map((item) => (
          <CustomTabPanel key={item.key} value={item.value} selectedTab={value}>
            {item.children}
          </CustomTabPanel>
        ))}
      </div>
    </>
  );
}

export default Tabs;
