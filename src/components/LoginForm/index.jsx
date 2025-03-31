import {
  Button,
  Input,
  Stack,
  Typography,
  Container,
  Paper,
  LoadingButton,
} from "@/components";
import { LOCAL_STORAGE_KEY, LOGIN_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useLoginHandler } from "@/api";
import { getresponseError, setIteam, useForm, useNotification } from "@/helper";
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

  const LoginHander = useLoginHandler({
    mutationConfig: {
      onSuccess: (response) => {
        if (response?.token) {
          showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
          setIteam(LOCAL_STORAGE_KEY.ACCESS_TOKEN, response?.token);
          router.push(DASHBOARD_URL);
        }
      },
      onError: (err) => {
        console.log("err", err);
        showNotification({ ...getresponseError(err) });
      },
    },
  });

  function handleFormSuccess({ values }) {
    LoginHander.mutate({
      data: {
        email: values.email,
        password: values.password,
      },
    });
  }

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
            <LoadingButton {...BUTTON} loading={LoginHander.isPending} />
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
