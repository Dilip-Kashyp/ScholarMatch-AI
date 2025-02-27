import { useState } from "react";
import {
  Button,
  Input,
  Stack,
  Typography,
  Container,
  Notification,
  Paper,
  LoadingButton,
} from "@/components";
import { LOGIN_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useLoginHandler } from "@/api";
import { useForm } from "@/helper";

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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate: LoginHander } = useLoginHandler({
    mutationConfig: {
      onSuccess: (response) => {
        if (response?.token) {
          setData(response);
          showNotification("Login successfully");
          setIsLoading(false);
          router.push("/dashboard");
        }
      },
      onError: () => {
        setIsLoading(false);
        showNotification("No User found");
      },
    },
  });

  const handleFormSuccess = (values) => {
    setIsLoading(true);
    LoginHander(values.values);
  };

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <Stack
            stackProps={{
              gap: 2,
            }}
          >
            <Typography {...LOGIN_HEADER} />
            <Input {...EMAIL_INPUT} onChange={onChange} onBlur={onBlur} />
            <Input {...PASSWORD_INPUT} onChange={onChange} onBlur={onBlur} />
            <LoadingButton {...BUTTON} loading={isLoading} />
          </Stack>
        </form>
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
