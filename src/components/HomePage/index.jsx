import { Button, Container, Stack, Typography, Input, Notification } from "../common";
import { HOME_PAGE_CONFIG } from "@/constants";
import FeaturePage from "./featurePage";
import { useRouter } from "next/router";
import { useState } from "react";


function HomePage() {
  const { HEADER_CONFIG, BUTTON_CONFIG, INPUT_FIELD } = HOME_PAGE_CONFIG;

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const showNotification = (message) => {
    setNotificationMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    if (INPUT_FIELD.inputProps.value) {
      router.push("/scholarships");
    } else {
      showNotification("Please enter a search term");
    }
  };

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
            gap: {xs: 8, sm: 6},
          }}
        >
          <Typography {...HEADER_CONFIG} />
          <Input {...INPUT_FIELD} />
          <Button onClick={handleSearch} {...BUTTON_CONFIG} />
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
