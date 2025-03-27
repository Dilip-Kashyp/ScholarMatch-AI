import {
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  Input,
  LoadingButton,
} from "@/components";
import { LOGIN_URL, REGISTRATION_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { getresponseError, useForm, useNotification } from "@/helper";
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
    NOTIFICATIONS_MESSAGES,
  } = REGISTRATION_FORM_CONFIG;
  const router = useRouter();
  const { showNotification } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const registrationHandler = useRegistrationHandler({
    mutationConfig: {
      onSuccess: () => {
        showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
        setIsLoading(false);
        router.push(LOGIN_URL);
      },
      onError: (err) => {
        setIsLoading(false);
        console.log("err", err);
        showNotification({ ...getresponseError(err) });
      },
    },
  });
  function handleFormSuccess({ values }) {
    setIsLoading(true);
    registrationHandler.mutate({
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    });
  }

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      name: "",
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
    </Container>
  );
}

export default RegistrationForm;
