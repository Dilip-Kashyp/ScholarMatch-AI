import { MenuItem } from "@mui/material";

function MenuList({ menuItems, onClick }) {
  return (
    <>
      {menuItems?.map((item) => {
        return (
          <MenuItem
            key={item.key}
            onClick={(event) => onClick?.(item.key, event)}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </>
  );
}

export default MenuList;
