import {
  Button,
  Container,
  Dropdown,
  Input,
  Paper,
  Stack,
  Typography,
  Notification,
} from "@/components";
import { SCHOLARSHIP_PAGE_CONFIG } from "@/constants";
import { useGetAllScholarships, useGetSearchedScholarships } from "@/api";
import Scholarships from "./scholarships";
import { useForm } from "@/helper";
import { useState } from "react";

function ScholarshipsPage() {
  const {
    HEADER_CONFIG,
    SEARCH_INPUT,
    SCHOLARSHIP_CATEGORY_DROPDOWN,
    SCHOLARSHIP_RELIGION_DROPDOWN,
    SCHOLARSHIP_LOCATION_DROPDOWN,
    BUTTON_CONFIG,
  } = SCHOLARSHIP_PAGE_CONFIG;

  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [data, setData] = useState([]);

  // const { data, isLoading, isError } = useGetAllScholarships({
  //   onSuccess: (response) => {},
  //   onError: (error) => {},
  // });

  const { mutate: getAllScholarships } = useGetSearchedScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        setData(response);
        showNotification("Scholarship fetched successfully");
      },
      onError: (error) => {
        console.log(error);
        showNotification("No scholarships found");
      },
    },
  });

  const handleFormSuccess = ({ values }) => {
    if (values.searchQuery) {
      getAllScholarships(values.searchQuery);
    } else {
      showNotification("Please enter a search term");
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

  const showNotification = (message) => {
    setNotificationMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container
        containerProps={{
          className: "h-[100%] flex flex-col justify-center gap-24 py-12",
        }}
      >
        <Paper
          paperProps={{
            className: "p-4 w-full flex flex-col gap-6",
          }}
        >
          <Stack>
            <Typography {...HEADER_CONFIG} />
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
              <Dropdown
                {...SCHOLARSHIP_CATEGORY_DROPDOWN}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Dropdown
                {...SCHOLARSHIP_RELIGION_DROPDOWN}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Dropdown
                {...SCHOLARSHIP_LOCATION_DROPDOWN}
                onChange={onChange}
                onBlur={onBlur}
              />
            </Stack>
            <Button {...BUTTON_CONFIG} />
          </form>
        </Paper>
        <Stack stackProps={{ direction: "row", gap: 4, flexWrap: "wrap" }}>

          {data?.data?.map((scholarship) => (
            <Scholarships scholarship={scholarship} />
          ))}
        </Stack>
        <Notification
          message={notificationMessage}
          open={open}
          onClose={handleClose}
        />
      </Container>
    </>
  );
}

export default ScholarshipsPage;
