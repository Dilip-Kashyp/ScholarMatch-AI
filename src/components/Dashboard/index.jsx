import { Button, Tabs } from "@/components/common";
import { useMemo } from "react";
import Profile from "./profile";
import AppliedScholarships from "./appliedScholarships";
import Dashboard from "./dashBoard";
import { ScholarshipsPage } from "..";

function JobSeekerProfile() {
  const tabItems = useMemo(() => {
    return [
      {
        label: "Overall Information",
        value: "OverallInformation",
        key: "OverallInformation",
        children: <Dashboard />,
      },
      {
        label: "applied scholarships",
        value: "appliedScholarships",
        key: "appliedScholarships",
        children: <AppliedScholarships />,
      },
      {
        label: "scholarships for you",
        value: "scholarshipInformation",
        key: "scholarshipInformation",
        children: <ScholarshipsPage />,
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
            marginLeft: { sm: "20%", xs: 0 },
            marginRight: { sm: "30%", xs: 0 },
            marginTop: { sm: "20px", xs: 0 },
            marginBottom: 2,
          },
        }}
      />
    </>
  );
}

export default JobSeekerProfile;
