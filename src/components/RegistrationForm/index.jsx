import {
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  Input,
  Notification,
  LoadingButton,
} from "@/components";
import { REGISTRATION_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useForm } from "@/helper";
import { useState } from "react";
import { useRegistrationHandler } from "@/api";
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
  const [notificationMessage, setNotificationMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSuccess = (values) => {
    setIsLoading(true);
    registrationHander(values.values);
  };

  const { mutate: registrationHander } = useRegistrationHandler({
    mutationConfig: {
      onSuccess: () => {
        showNotification("Account created successfully");
        setIsLoading(false);
      },
      onError: () => {
        setIsLoading(false);
        showNotification("Email already exists");
      },
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSuccess: handleFormSuccess,
  });

  const showNotification = (message) => {
    setNotificationMessage(message);
    setOpen(true);
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
              <LoadingButton loading={isLoading} {...BUTTON} />
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
