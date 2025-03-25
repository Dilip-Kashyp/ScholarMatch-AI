import { Tabs } from "@/components/common";
import { useMemo } from "react";
import Profile from "./profile";
import Scholarship from "./scholarship";
import AppliedScholarships from "./appliedScholarships";
import Dashboard from "./dashBoard";

function JobSeekerProfile() {
  const tabItems = useMemo(() => {
    return [
      {
        label: "Dashboard",
        value: "dashboardInformation",
        key: "dashboardInformation",
        children: <Dashboard />,
      },
      {
        label: "scholarships",
        value: "scholarshipInformation",
        key: "scholarshipInformation",
        children: <Scholarship />,
      },
      {
        label: "applied scholarships",
        value: "appliedScholarships",
        key: "appliedScholarships",
        children: <AppliedScholarships />,
      },
      {
        label: "profile",
        value: "profileInformation",
        key: "profileInformation",
        children: <Profile />,
      },
    ];
  }, []);

  return (
    <>
      <Tabs
        items={tabItems}
        tabsProps={{
          defaultValue: tabItems?.[0].key,
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            marginLeft: { sm: "25%", xs: 0 },
            marginRight: { sm: "32%", xs: 0 },
            marginTop: { sm: "20px", xs: 0 },
            marginBottom: 2,
          },
        }}
      />
    </>
  );
}

export default JobSeekerProfile;
