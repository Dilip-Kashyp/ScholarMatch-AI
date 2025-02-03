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
import {  useGetSearchedScholarships } from "@/api";
import Scholarships from "./scholarships";
import { useForm } from "@/helper";
import { useState } from "react";

function ScholarshipsPage() {
  const { HEADER_CONFIG, SEARCH_INPUT, BUTTON_CONFIG, GET_ALL_BUTTON_CONFIG } =
    SCHOLARSHIP_PAGE_CONFIG;

  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [data, setData] = useState([]);

  const { mutate: getAllScholarships } = useGetSearchedScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        setData(response);
        showNotification("Scholarship fetched successfully");
      },
      onError: (error) => {
        console.error(error);
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
              <Button {...BUTTON_CONFIG} />
              <Button onClick={() => getAllScholarships()} {...GET_ALL_BUTTON_CONFIG} />
            </Stack>
          </form>

        </Paper>
        <Stack 
          stackProps={{ 
            direction: "row", 
            gap: 4, 
            flexWrap: "wrap",
            className: "flex-grow"
          }}
        >
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
