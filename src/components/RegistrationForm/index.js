import {
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  Input,
} from "@/components";
import { REGISTRATION_FORM_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { useForm } from "@/helper";
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

  const handleFormSuccess = (values) => {
    console.log("Form submitted successfully", values);
  };

  const { onSubmit, errorObj } = useForm({
    initialValues: {
      firstName: "Dilip",
      lastName: "Kumar",
      email: "dilip@gmail.com",
      password: "123456",
      confirmPassword: "123456",
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
          <Input {...NAME_INPUT} />
          <Input {...EMAIL_INPUT} />
          <Input {...PASSWORD_INPUT} />
          <Button {...BUTTON} onClick={onSubmit} />
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
