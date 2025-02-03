import {
  Button,
  Container,
  Stack,
  Typography,
  Input,
  Notification,
} from "../common";
import { HOME_PAGE_CONFIG } from "@/constants";
import FeaturePage from "./featurePage";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "@/helper";
import { useGetSearchedScholarships } from "@/api";

function HomePage() {
  const { HEADER_CONFIG, BUTTON_CONFIG, INPUT_FIELD } = HOME_PAGE_CONFIG;

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { mutate: getScholarshipsData } = useGetSearchedScholarships({
    mutationConfig: {
      onSuccess: () => {
        router.push("/scholarships");

      },
      onError: (error) => {
        console.log(error);
        showNotification("No scholarships found");
      },
    },
  });

  const showNotification = (message) => {
    setNotificationMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = ({ values }) => {
    console.log(values);
    if (values.searchQuery) {
      getScholarshipsData(values.searchQuery);
    } else {
      showNotification("Please enter a search term");
    }
  };

  const { onSubmit, onChange, onBlur } = useForm({
    initialValues: {
      search: "",
    },
    onSuccess: handleSearch,
  });

  return (
    <>
      <Container
        containerProps={{
          className: "h-[100%] mt-32 flex flex-col justify-center gap-36",
        }}
      >
        <Stack
          stackProps={{
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 8, sm: 6 },
          }}
        >
          <Typography {...HEADER_CONFIG} />
          <form onSubmit={onSubmit}>
            <Stack
              stackProps={{
                direction: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Input {...INPUT_FIELD} onChange={onChange} onBlur={onBlur} />
              <Button {...BUTTON_CONFIG} />
            </Stack>
          </form>
        </Stack>

        <FeaturePage />
      </Container>
      <Notification
        message={notificationMessage}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default HomePage;
