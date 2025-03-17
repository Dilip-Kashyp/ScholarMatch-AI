export const FORGET_PASSWORD_FORM_CONFIG = {
  FORGET_PASSWORD_HEADER: {
    typographyProps: {
      children: "Forgot Password",
      variant: "h4",
      sx: {
        fontWeight: "bold",
      },
    },
  },
  EMAIL_INPUT: {
    inputProps: {
      placeholder: "abcxyz@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
  },
  BUTTON: {
    buttonProps: {
      children: "Send OTP",
      variant: "contained",
      type: "submit",
      size: "large",
      sx: {
        backgroundColor: "#2c3e50",
        color: "#fff",
      },
    },
  },

  REST_BUTTON: {
    buttonProps: {
      children: "Reset Password",
      variant: "contained",
      type: "submit",
      size: "large",
      sx: {
        backgroundColor: "#f5977a",
        color: "#fff",
      },
    },
  },
  NOTIFICATIONS_MESSAGES: {
    OTP_SUCCESS: {
      message: "OTP sent successfully",
    },
    ERROR: {
      message: "Unable to send OTP, Try again!",
    },
  },
};
