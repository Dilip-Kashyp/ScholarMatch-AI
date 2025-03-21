import { useState } from "react";
import {
  Button,
  Input,
  Stack,
  Typography,
  Container,
  Paper,
  LoadingButton,
} from "@/components";
import { LOGIN_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useLoginHandler } from "@/api";
import { useForm, useNotification } from "@/helper";
import { DASHBOARD_URL, FORGOT_PASSWORD_URL, REGISTER_URL } from "@/constants";

function LoginPage() {
  const {
    LOGIN_HEADER,
    EMAIL_INPUT,
    PASSWORD_INPUT,
    BUTTON,
    FORGOT_PASSWORD,
    SIGNUP,
    CREATE_ACCOUNT_TEXT,
    NOTIFICATIONS_MESSAGES,
  } = LOGIN_FORM_CONFIG;
  const router = useRouter();

  const { showNotification } = useNotification();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const { mutate: LoginHander } = useLoginHandler({
    mutationConfig: {
      onSuccess: (response) => {
        if (response?.token) {
          setData(response);
          showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
          setIsLoading(false);
          router.push(DASHBOARD_URL);
        }
      },
      onError: () => {
        setIsLoading(false);
        showNotification(NOTIFICATIONS_MESSAGES.ERROR);
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
        <Button
          {...FORGOT_PASSWORD}
          onClick={() => {
            router.push(FORGOT_PASSWORD_URL);
          }}
        />
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
              router.push(REGISTER_URL);
            }}
          />
        </Stack>
      </Paper>
    </Container>
  );
}

export default LoginPage;
