export const SCHOLARSHIP_APPLICATION_PAGE_CONFIG = {
  SCHOLARSHIP_NAME: (name) => {
    return {
      typographyProps: {
        variant: "h5",
        children: `${name}`,
        sx: { fontWeight: "bold", color: "#2c3e50" },
      },
    };
  },

  SCHOLARSHIP_AMOUNT: (amout) => {
    return {
      typographyProps: {
        variant: "subtitle1",
        children: `${amout}`,
        sx: { color: "#4caf50", fontWeight: "bold" },
      },
    };
  },
  SCHOLARSHIP_APPLIED: (date) => {
    return {
      typographyProps: {
        variant: "body2",
        children: `Applied On: ${date}`,
        sx: { color: "#555" },
      },
    };
  },
  SCHOLARSHIP_STATUS: (status) => {
    return {
      typographyProps: {
        variant: "body2",
        children: `Status: ${status}`,
        sx: { color: "#555" },
      },
    };
  },
};
