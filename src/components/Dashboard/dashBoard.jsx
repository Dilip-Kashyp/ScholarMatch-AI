import { Container, Paper, Stack } from "@/components";
import { DASHBOARD_PAGE_CONFIG } from "@/constants";
import OverallCard from "./overallCard";
import { useGetOverallStatus } from "@/api";
import { getresponseError, useNotification } from "@/helper";
import { useEffect, useState } from "react";

function Dashboard() {
  const { HEADING } = DASHBOARD_PAGE_CONFIG;
  const [data, setData] = useState(0);
  const { showNotification } = useNotification();

  const OverallStatus = useGetOverallStatus({
    mutationConfig: {
      onSuccess: (res) => {
        setData(res.data);
      },
      onError: (err) => {
        showNotification({ ...getresponseError(err) });
      },
    },
  });

  useEffect(() => {
    OverallStatus.mutate({});
  }, []);

  return (
    <>
      <Container
        containerProps={{
          className: "min-h-screen flex flex-col gap-12 py-8 px-4 md:px-12",
        }}
      >
        {/* <Typography {...HEADING} /> */}
        <Stack
          stackProps={{
            direction: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: {xs: 2, sm: 4 },
          }}
        >
          <OverallCard
            title={"Total Applications"}
            count={data?.totalApplications}
            bgColor={"#e8f4ff"}
          />
          <OverallCard
            title={"Pending Applications"}
            count={data?.pendingApplications}
            bgColor={"#fff4e1"}
          />
          <OverallCard
            title={"Approved Scholarships"}
            count={data?.approvedApplications}
            bgColor={"#e6fae6"}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Dashboard;