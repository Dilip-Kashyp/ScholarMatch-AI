import { Button, Chip, Paper, Stack, Typography } from "../common";
import { SCHOLARSHIP_DETAILS_CARD_CONFIG } from "@/constants";

function Scholarships({ scholarship }) {
  const {
    NAME_CONFIG,
    AMOUNT_CONFIG,
    DEADLINE_CONFIG,
    LOCATION_CONFIG,
    ELIGIBILITY_CONFIG,
    CATEGORIES_CONFIG,
    ACTIVE_CONFIG,
  } = SCHOLARSHIP_DETAILS_CARD_CONFIG;
  return (
    <Paper
      paperProps={{
        className: "p-4",
        sx: { width: "350px" },
        elevation: 2,
      }}
    >
      <Stack stackProps={{ gap: 2 }}>
        <Stack
          stackProps={{
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography {...NAME_CONFIG(scholarship.name)} />
          <Typography {...AMOUNT_CONFIG(scholarship.amount)} />
        </Stack>
        <Stack stackProps={{ gap: 1 }}>
          <Typography {...DEADLINE_CONFIG(scholarship.deadline)} />
          <Typography {...LOCATION_CONFIG(scholarship.location)} />
          <Typography
            {...ELIGIBILITY_CONFIG(scholarship.min_age, scholarship.max_age)}
          />
          <Typography {...CATEGORIES_CONFIG(scholarship.category)} />
        </Stack>

        <Stack stackProps={{ direction: "row", gap: 1, flexWrap: "wrap" }}>
          {scholarship.categories?.map((category, index) => (
            <Chip
              key={index}
              label={category}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#2c3e50",
                border: "1px solid #e0e0e0",
              }}
            />
          ))}
        </Stack>
        <Stack
          stackProps={{
            direction: "row",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <Button
            buttonProps={{
              children: "View Details",

              sx: {
                backgroundColor: "#2c3e50",
                color: "white",
                width: "fit-content",
                cursor: "pointer",
              },
            }}
          />
          <Typography {...ACTIVE_CONFIG(scholarship.is_active)} />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Scholarships;
