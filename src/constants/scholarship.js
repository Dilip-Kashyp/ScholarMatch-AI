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

  GET_ALL_BUTTON_CONFIG: {
    buttonProps: {
      variant: "contained",
      children: "Get all",
      size: "large",
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
        "Enter your background and I'll find the best scholarships just for you!",
      size: "big",
      name: "searchQuery",
      variant: "outlined",
      sx: {
        width: { xs: 300, sm: 600 },
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
    const formattedDate = new Date(deadline).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return {
      typographyProps: {
        variant: "body1",
        children: `Deadline: ${formattedDate}`,
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

  ELIGIBILITY_CONFIG: (gender) => {
    return {
      typographyProps: {
        variant: "body1",
        children: `Gender : ${gender}`,
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
