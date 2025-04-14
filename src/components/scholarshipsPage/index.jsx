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
import { SCHOLARSHIP_PAGE_CONFIG } from "@/constants";
import { useGetAllScholarships } from "@/api";
import { getresponseError, useForm, useNotification } from "@/helper";
import { useState } from "react";

function ScholarshipsPage() {
  const {
    HEADER_CONFIG,
    SEARCH_INPUT,
    BUTTON_CONFIG,
    APPLICATION_COUNTER,
    NOTIFICATIONS_MESSAGES,
  } = SCHOLARSHIP_PAGE_CONFIG;
  const [data, setData] = useState([]);
  const [scholarshipCount, setScholarshipCount] = useState(0);

  const { showNotification } = useNotification();

  const getAllScholarships = useGetAllScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        setData(response);
        setScholarshipCount(response?.data?.length || 0);
        showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
      },
      onError: (error) => {
        console.error(error);
        showNotification({ ...getresponseError(error) });
      },
    },
  });

  const handleFormSuccess = ({ values }) => {
    console.log(values);
    getAllScholarships.mutate({ data: { searchQuery: values.searchQuery } });
  };

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      searchQuery: "",
    },
    onSuccess: handleFormSuccess,
  });

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
          <Stack>
            <Typography {...HEADER_CONFIG} />
            <Typography {...APPLICATION_COUNTER(scholarshipCount)} />
          </Stack>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(e);
            }}
          >
            <Stack
              stackProps={{
                direction: { xs: "column", md: "row" },
                gap: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Input {...SEARCH_INPUT} onChange={onChange} onBlur={onBlur} />
            </Stack>
            <Stack stackProps={{ direction: "row", gap: 2 }}>
              <LoadingButton
                loading={getAllScholarships.isPending}
                {...BUTTON_CONFIG}
              />
            </Stack>
          </form>
        </Paper>
        <Stack
          stackProps={{
            direction: "row",
            gap: 4,
            flexWrap: "wrap",
            className: "flex-grow",
          }}
        >
          {data?.data?.map((scholarship) => (
            <Scholarships scholarship={scholarship} />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default ScholarshipsPage;
