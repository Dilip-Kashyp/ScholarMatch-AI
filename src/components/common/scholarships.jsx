import { useApplyScholarship } from "@/api";
import { Button, Chip, LoadingButton, Paper, Stack, Typography } from ".";
import { SCHOLARSHIP_DETAILS_CARD_CONFIG } from "@/constants";
import { getresponseError, useNotification } from "@/helper";

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

  const { showNotification } = useNotification();

  const applyScholarship = useApplyScholarship({
    mutationConfig: {
      onSuccess: (res) => {
        console.log("Apply scholarship response", res);
        showNotification({ message: res?.message });
      },
      onError: (err) => {
        showNotification(getresponseError(err));
        console.error(err);
      },
    },
  });

  const handleApply = () => {
    applyScholarship.mutate({ data: { scholarship_id: scholarship.id } });
    console.log("Apply scholarship", scholarship.id);
  };

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
          <Typography {...ELIGIBILITY_CONFIG(scholarship.gender)} />
          <Typography {...CATEGORIES_CONFIG(scholarship.category)} />
        </Stack>

        {/* <Stack stackProps={{ direction: "row", gap: 1, flexWrap: "wrap" }}>
          {scholarship.categories?.map((category, index) => (
            <Chip
              key={index}
              label={scholarship.category}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#2c3e50",
                border: "1px solid #e0e0e0",
              }}
            />
          ))}
        </Stack> */}
        <Stack
          stackProps={{
            direction: "row",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <LoadingButton
            onClick={() => {
              handleApply();
            }}
            loading={handleApply.isPending}
            buttonProps={{
              children: "Apply Now",

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
