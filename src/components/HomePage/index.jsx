import {
  Container,
  Stack,
  Typography,
  Input,
  Notification,
  LoadingButton,
} from "../common";
import { HOME_PAGE_CONFIG } from "@/constants";
import FeaturePage from "./featurePage";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "@/helper";
import { useGetSearchedScholarships } from "@/api";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { HEADER_CONFIG, BUTTON_CONFIG, INPUT_FIELD } = HOME_PAGE_CONFIG;

  const router = useRouter();
  const [notificationMessage, setNotificationMessage] = useState("");

  const { mutate: getScholarshipsData } = useGetSearchedScholarships({
    mutationConfig: {
      onSuccess: () => {
        router.push("/scholarships");
        setIsLoading(false);
      },
      onError: () => {
        setIsLoading(false);
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
    if (values.searchQuery) {
      getScholarshipsData(values.searchQuery);
      setIsLoading(true);
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
              <LoadingButton loading={isLoading} {...BUTTON_CONFIG} />
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
