import { Button, Tabs } from "@/components/common";
import { useState, useEffect, useMemo } from "react";
import Dashboard from "./dashBoard";
import ScholarshipApplicationCard from "./ScholarshipApplicationCard";

function JobSeekerProfile() {
  const [tabItems, setTabItems] = useState([]);

  useEffect(() => {
    // Fetch or compute tabs dynamically (e.g., based on user role, API response, etc.)
    const fetchTabs = async () => {
      const tabs = [
        {
          label: "Overall Information",
          value: "OverallInformation",
          key: "OverallInformation",
          children: <Dashboard />,
        },
        {
          label: "Applied Scholarships",
          value: "appliedScholarships",
          key: "appliedScholarships",
          children: <ScholarshipApplicationCard />,
        },
      ];
      setTabItems(tabs);
    };

    fetchTabs();
  }, []);

  return (
    <>
      {tabItems.length > 0 && (
        <Tabs
          items={tabItems}
          tabsProps={{
            defaultValue: tabItems?.[0].key,
            sx: {
              borderBottom: "none",
              marginLeft: { sm: "20%", xs: 0 },
              marginRight: { sm: "30%", xs: 0 },
              marginTop: { sm: "20px", xs: 0 },
              marginBottom: 2,
            },
            TabIndicatorProps: { style: { display: "none" } },
          }}
        />
      )}
    </>
  );
}

export default JobSeekerProfile;
