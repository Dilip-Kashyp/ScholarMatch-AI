import {
  Container,
  Input,
  Paper,
  Stack,
  Typography,
  Notification,
  LoadingButton,
  Scholarships,
} from "@/components";
import { DASHBOARD_PAGE_CONFIG } from "@/constants";
import OverallCard from "./overallCard";

function Dashboard() {
  const { HEADING } = DASHBOARD_PAGE_CONFIG;

  return (
    <>
      <Container
        containerProps={{
          className: "min-h-screen flex flex-col gap-24 py-12",
        }}
      >
        <Paper
          paperProps={{
            className: "p-4 w-full flex flex-col gap-6",
          }}
        >
          {/* <Typography {...HEADING} /> */}
          <Stack
            stackProps={{
              direction: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <OverallCard
              title={"Total Applications"}
              count={44}
              bgColor={"#e8f4ff"}
            />
            <OverallCard
              title={"Approved Scholarships"}
              count={44}
              bgColor={"#e6fae6"}
            />
            <OverallCard
              title={"Pending Applications"}
              count={44}
              bgColor={"#fff4e1"}
            />
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default Dashboard;
