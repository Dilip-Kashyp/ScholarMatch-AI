import { Card as MUICard } from "@mui/material";

function Card({ children, cardProps }) {
  return <MUICard {...cardProps}>{children}</MUICard>;
}

export default Card;
