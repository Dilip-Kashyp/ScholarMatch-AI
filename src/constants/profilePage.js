import {
  GENDER_DROPDOWN_OPTIONS,
  RELIGION_DROPDOWN_OPTIONS,
  LOCATION_DROPDOWN_OPTIONS,
} from "./dropdownOptions";

export const PROFILE_PAGE_CONFIG = {
  REGISTRATION_HEADER: {
    typographyProps: {
      children: "Personal Details",
      variant: "h5",
      sx: {
        fontWeight: "bold",
      },
    },
  },
  BACKGROUND_DETAILS: {
    typographyProps: {
      children: "Background Details",
      variant: "h5",
      sx: {
        fontWeight: "bold",
      },
    },
  },

  NAME_INPUT: {
    inputProps: {
      label: "Full Name",
      required: true,
      name: "name",
      type: "text",
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
  },

  CASTE_INPUT: {
    inputProps: {
      label: "Caste",
      required: true,
      name: "caste",
      type: "text",
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
  },

  EMAIL_INPUT: {
    inputProps: {
      label: "Email",
      placeholder: "abcxyz@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
  },

  RELIGION_DROPDOWN: {
    inputLabelProps: {
      children: "Religion",
    },
    selectProps: {
      name: "religion",
      required: true,
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
    options: RELIGION_DROPDOWN_OPTIONS,
  },

  GENDER_DROPDOWN: {
    inputLabelProps: {
      children: "Gender",
    },
    selectProps: {
      name: "gender",
      required: true,
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
    options: GENDER_DROPDOWN_OPTIONS,
  },

  AGE_INPUT: {
    inputProps: {
      label: "Age",
      required: true,
      name: "age",
      type: "number",
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
  },

  LOCATION_DROPDOWN: {
    inputLabelProps: {
      children: "Location",
    },
    selectProps: {
      name: "location",
      required: true,
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
    options: LOCATION_DROPDOWN_OPTIONS,
  },

  ACADEMIC_DETAILS_INPUT: {
    inputProps: {
      label: "Academic Details",
      name: "academicDetails",
    },
    formControlProps: {
      sx: {
        width: "100%",
      },
    },
  },

  PASSWORD_INPUT: {
    inputProps: {
      label: "Password",
      required: true,
      name: "password",
      type: "password",
    },
    formControlProps: {
      sx: {
        width: { xs: "100%", sm: "50%" },
      },
    },
  },

  BUTTON: {
    buttonProps: {
      children: "Save",
      variant: "contained",
      size: "large",
      type: "submit",
      sx: {
        backgroundColor: "#2c3e50",
        color: "#fff",
        width: "200px",
      },
    },
  },

  NOTIFICATION_CONFIG: {
    SUCCESS: {
      message: "Thanks! Profile Updated Successfully",
    },
  },
};
