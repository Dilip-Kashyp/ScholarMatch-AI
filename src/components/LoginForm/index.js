import {
  Button,
  Input,
  Stack,
  Typography,
  Container,
  Paper,
} from "@/components";
import { LOGIN_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";

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
          <Button {...BUTTON} />
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
    </Container>
  );
}

export default LoginPage;
