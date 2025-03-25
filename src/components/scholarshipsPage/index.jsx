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
import { useGetSearchedScholarships } from "@/api";
import { useForm, useNotification } from "@/helper";
import { useState } from "react";

function ScholarshipsPage() {
  const {
    HEADER_CONFIG,
    SEARCH_INPUT,
    BUTTON_CONFIG,
    GET_ALL_BUTTON_CONFIG,
    APPLICATION_COUNTER,
    NOTIFICATIONS_MESSAGES,
  } = SCHOLARSHIP_PAGE_CONFIG;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGetAll, setIsLoadingGetAll] = useState(false);
  const [scholarshipCount, setScholarshipCount] = useState(0);

  const { showNotification } = useNotification();

  const { mutate: getAllScholarships } = useGetSearchedScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        setData(response);
        setScholarshipCount(response?.data?.length || 0);
        setIsLoading(false);
        setIsLoadingGetAll(false);
        showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
      },
      onError: (error) => {
        setIsLoadingGetAll(false);
        setIsLoading(false);
        console.error(error);
        showNotification(NOTIFICATIONS_MESSAGES.ERROR);
      },
    },
  });

  const handleFormSuccess = ({ values }) => {
    if (values.searchQuery) {
      getAllScholarships(values.searchQuery);
      setIsLoading(true);
    } else {
      showNotification(NOTIFICATIONS_MESSAGES.SEARCH_ERROR);
    }
  };

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      searchQuery: "",
      scholarshipCategory: "",
      scholarshipReligion: "",
      scholarshipLocation: "",
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
          <form onSubmit={onSubmit}>
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
              <LoadingButton loading={isLoading} {...BUTTON_CONFIG} />
              <LoadingButton
                loading={isLoadingGetAll}
                onClick={() => {
                  getAllScholarships();
                  setIsLoadingGetAll(true);
                }}
                {...GET_ALL_BUTTON_CONFIG}
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
