import { Stack, Typography } from "../common";
import { DASHBOARD_PAGE_CONFIG } from "@/constants";

function OverallCard({ title, count, bgColor }) {
  return (
    <Stack
      stackProps={{
        className: "my-2 rounded-lg px-5 py-6 shadow-md",
        height: "100px",
        width: { xs: "100%", sm: "280px" },
        justifyContent: "space-between",
        bgcolor: bgColor,
        direction: "row",
        alignItems: "center",
      }}
    >
      <Stack>
        <Typography {...DASHBOARD_PAGE_CONFIG.TITLE_TEXT(title)} />
        <Typography {...DASHBOARD_PAGE_CONFIG.COUNT(count)} />
      </Stack>
    </Stack>
  );
}

export default OverallCard;
