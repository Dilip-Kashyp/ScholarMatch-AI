import {
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  Input,
  Notification,
} from "@/components";
import { REGISTRATION_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useForm } from "@/helper";
import { useState } from "react";
function RegistrationForm() {
  const {
    REGISTRATION_HEADER,

    EMAIL_INPUT,
    PASSWORD_INPUT,
    BUTTON,
    NAME_INPUT,
    LOGIN_LINK,
    ALREADY_HAVE_ACCOUNT,
  } = REGISTRATION_FORM_CONFIG;
  const router = useRouter();

  const handleFormSuccess = (values) => {};

  const [notificationMessage, setNotificationMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSuccess: handleFormSuccess,
  });

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
            direction: "column",
            gap: 2,
          }}
        >
          <Typography {...REGISTRATION_HEADER} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(e);
            }}
          >
            <Stack
              stackProps={{
                direction: "column",
                gap: 2,
              }}
            >
              <Input {...NAME_INPUT} onChange={onChange} onBlur={onBlur} />
              <Input {...EMAIL_INPUT} onChange={onChange} onBlur={onBlur} />
              <Input {...PASSWORD_INPUT} onChange={onChange} onBlur={onBlur} />
              <Button
                onClick={() => {
                  setNotificationMessage("This page is under development");
                  setOpen(true);
                }}
                {...BUTTON}
              />
            </Stack>
          </form>
        </Stack>

        <Stack
          stackProps={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography {...ALREADY_HAVE_ACCOUNT} />
          <Button {...LOGIN_LINK} onClick={() => router.push("/login")} />
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

export default RegistrationForm;
