export const SCHOLARSHIP_PAGE_CONFIG = {
  HEADER_CONFIG: {
    typographyProps: {
      variant: "h5",
      children: "Search Scholarships",
    },
  },
  BUTTON_CONFIG: {
    buttonProps: {
      variant: "contained",
      children: "Search",
      size: "large",
      type: "submit",
      sx: {
        backgroundColor: "#2c3e50",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#2c3e50",
        },
      },
    },
  },
  SEARCH_INPUT: {
    inputProps: {
      placeholder:
        "Enter your background and I’ll find the best scholarships just for you!",
      size: "big",
      name: "searchQuery",
      variant: "outlined",
      sx: {
        width: { xs: 320, sm: 800 },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": { borderColor: "#2c3e50" },
          marginBottom: "20px",
        },
      },
    },

  },

  LOADING_CONFIG: {
    children: "Loading scholarships...",
  },
};

export const SCHOLARSHIP_DETAILS_CARD_CONFIG = {
  NAME_CONFIG: (name) => {
    return {
      typographyProps: {
        children: name,
        variant: "body1",
        sx: {
          fontWeight: 600,
        },
      },
    };
  },

  AMOUNT_CONFIG: (amount) => {
    return {
      typographyProps: {
        variant: "h6",
        children: `₹${amount}`,
        sx: {
          color: "green",
        },
      },
    };
  },

  DEADLINE_CONFIG: (deadline) => {
    return {
      typographyProps: {
        variant: "body1",
        children: `Deadline: ${deadline}`,
        sx: {
          color: "red",
        },
      },
    };
  },

  LOCATION_CONFIG: (location) => {
    return {
      typographyProps: {
        variant: "body1",
        children: `Location : ${location}`,
        sx: {
          color: "gray",
        },
      },
    };
  },

  ELIGIBILITY_CONFIG: (minAge, maxAge) => {
    return {
      typographyProps: {
        variant: "body1",
        children: `Age : ${minAge} - ${maxAge}`,
        sx: {
          color: "gray",
        },
      },
    };
  },

  CATEGORIES_CONFIG: (type) => {
    return {
      typographyProps: {
        variant: "body1",
        children: `Categorie : ${type}`,
        sx: {
          color: "gray",
        },
      },
    };
  },
  ACTIVE_CONFIG: (isActive) => {
    return {
      typographyProps: {
        variant: "body1",
        children: isActive ? "Active" : "Inactive",
        sx: {
          color: isActive ? "green" : "red",
        },
      },
    };
  },
};
