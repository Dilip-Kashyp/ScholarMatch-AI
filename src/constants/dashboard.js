export const DASHBOARD_PAGE_CONFIG = {
  HEADING: {
    typographyProps: {
      children: "Login",
      variant: "h5",
    },
  },

  COUNT: (totalCount) => {
    return {
      typographyProps: {
        children: totalCount,
        variant: "body1",
        sx: {
          fontSize: "20px",
        },
      },
    };
  },
  TITLE_TEXT: (text) => {
    return {
      typographyProps: {
        children: text,
        variant: "h6",
      },
    };
  },
};
