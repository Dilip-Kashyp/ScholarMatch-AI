export const HOME_PAGE_CONFIG = {
  HEADER_CONFIG: {
    typographyProps: {
      variant: "h4",
      children: "Find the Perfect Scholarship for You",
      sx: {
        textAlign: "center",
        fontWeight: 700,
        color: "#333",
        fontSize: {
          xs: "2rem",
          sm: "3rem",
        },
      },
    },
  },

  INPUT_FIELD: {
    inputProps: {
      placeholder:
        "Enter your background and I’ll find the best scholarships just for you!",
      size: "big",
      name: "searchQuery",
      variant: "outlined",
      sx: {
        width: { xs: 300, sm: 800 },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": { borderColor: "#2c3e50" },
        },
      },
    },
  },
  NOTIFICATIONS_MESSAGES: {
    SUCCESS: { message: "Scholarships fetched successfully" },
    ERROR: { message: "No scholarships found" },
    SEARCH_ERROR: { message: "Please enter a search term" },
  },
};

export const FEATURE_PAGE_CONFIG = {
  HEADER_CONFIG: {
    typographyProps: {
      variant: "h4",
      children: "Why Choose Us?",
      sx: {
        textAlign: "center",
        fontWeight: 700,
        color: "#333",
        fontSize: {
          xs: "2rem",
          sm: "3rem",
        },
      },
    },
  },

  FEATURES: [
    {
      title: "AI-Powered Search",
      description:
        "Get personalized scholarship recommendations using advanced AI.",
    },
    {
      title: "Wide Range of Options",
      description:
        "Explore scholarships from local, government, and state institutions.",
    },
    {
      title: "Easy to Use",
      description: "Simple and intuitive interface for seamless navigation.",
    },
  ],
};

export const FEATURE_CARD_CONFIG = {
  TITLE_CONFIG: (title) => {
    return {
      typographyProps: {
        children: title,
        variant: "h5",
        sx: {
          fontWeight: 500,
        },
      },
    };
  },

  DESCRIPTION_CONFIG: (description) => {
    return {
      typographyProps: {
        children: description,
        variant: "body1",
        sx: {
          fontWeight: 600,
        },
      },
    };
  },
};
