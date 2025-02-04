import {
  Button,
  Input,
  Stack,
  Typography,
  Container,
  Notification,
  Paper,
} from "@/components";
import { LOGIN_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useState } from "react";

function LoginPage() {
  const {
    LOGIN_HEADER,
    EMAIL_INPUT,
    PASSWORD_INPUT,
    BUTTON,
    FORGOT_PASSWORD,
    SIGNUP,
    CREATE_ACCOUNT_TEXT,
  } = LOGIN_FORM_CONFIG;
  const router = useRouter();

  const [notificationMessage, setNotificationMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      containerProps={{
        maxWidth: "sm",
        className: "h-screen flex justify-center items-center",
      }}
    >
      <Paper
        paperProps={{
          className: "p-4 w-full",
        }}
      >
        <Stack
          stackProps={{
            gap: 2,
          }}
        >
          <Typography {...LOGIN_HEADER} />
          <Input {...EMAIL_INPUT} />
          <Input {...PASSWORD_INPUT} />
          <Button
            onClick={() => {
              setNotificationMessage("This page is under development");
              setOpen(true);
            }}
            {...BUTTON}
          />
        </Stack>
        <Button {...FORGOT_PASSWORD} />
        <Stack
          stackProps={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography {...CREATE_ACCOUNT_TEXT} />
          <Button
            {...SIGNUP}
            onClick={() => {
              router.push("/registration");
            }}
          />
        </Stack>
      </Paper>
      <Notification
        message={notificationMessage}
        open={open}
        onClose={handleClose}
      />
    </Container>
  );
}

export default LoginPage;
