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
import { FORGET_PASSWORD_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useLoginHandler } from "@/api";
import { useForm, useNotification } from "@/helper";
import { ACCOUNT_VERIFICATION_URL } from "@/constants";

function ForgotPasswordPage() {
  const {
    FORGET_PASSWORD_HEADER,
    EMAIL_INPUT,
    BUTTON,
    NOTIFICATIONS_MESSAGES,
  } = FORGET_PASSWORD_FORM_CONFIG;
  const router = useRouter();

  const { showNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(false);

  const { mutate: LoginHander } = useLoginHandler({
    mutationConfig: {
      onSuccess: () => {
        setData(response);
        showNotification(NOTIFICATIONS_MESSAGES.OTP_SUCCESS);
        setIsLoading(false);
        router.push(
          {
            pathname: ACCOUNT_VERIFICATION_URL,
            query: { email: email },
          },
          ACCOUNT_VERIFICATION_URL
        );
      },
      onError: () => {
        setIsLoading(false);
        showNotification(NOTIFICATIONS_MESSAGES.ERROR);
      },
    },
  });

  const handleFormSuccess = (values) => {
    setIsLoading(true);
    setEmail(values.values);
    LoginHander(values.values);
  };

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      email: "",
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
            <Typography {...FORGET_PASSWORD_HEADER} />
            <Input {...EMAIL_INPUT} onChange={onChange} onBlur={onBlur} />
            <LoadingButton {...BUTTON} loading={isLoading} />
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default ForgotPasswordPage;
