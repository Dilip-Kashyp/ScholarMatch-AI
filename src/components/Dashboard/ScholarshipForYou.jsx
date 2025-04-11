import { getresponseError, useNotification } from "@/helper";
import { useEffect, useState } from "react";
import { usePersonalizedScholarships } from "@/api";
import { useRouter } from "next/navigation";
import { PROFILE_URL } from "@/constants";
import PersonalizedScholarships from "./personalizedScholarships";

function ScholarshipForYou() {
  const { showNotification } = useNotification();
  const [cardData, setCardData] = useState([]);
  const router = useRouter();

  const GetPersonalizedScholarships = usePersonalizedScholarships({
    mutationConfig: {
      onSuccess: (res) => {
        setCardData(res.data);
      },
      onError: (err) => {
        console.log(err);
        showNotification({ ...getresponseError(err) });
        if (
          err?.response?.data?.message ===
          "Complete the profile to get personalized scholarships."
        ) {
          router.push(PROFILE_URL);
        }
      },
    },
  });

  useEffect(() => {
    GetPersonalizedScholarships.mutate({});
  }, []);

  return (
    <>
      <PersonalizedScholarships
        data={cardData}
        getAppliedStatus={GetPersonalizedScholarships}
      />
    </>
  );
}

export default ScholarshipForYou;
