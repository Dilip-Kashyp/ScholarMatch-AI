export const ABOUT_PAGE_CONFIG = {
  SEARCH_QUERY_CONFIG: (query) => {
    return {
      typographyProps: {
        variant: "h6",
        children: `* ${query}`,
        sx: {
          color: "gray",
        },


      },
    };
  },



  HEADER_CONFIG: {
    typographyProps: {
      variant: "h5",
      align: "center",
      children: "How to use our platform",
    },
  },
  DESCRIPTION_CONFIG: {
    typographyProps: {
      variant: "h6",
      children:
        "Go to the scholarship page and search for scholarships using the search bar. Search query may be like  ",
      sx: {
        color: "gray",
      },
    },
  },
  HOW_IT_WORKS_HEADER_CONFIG: {
    typographyProps: {
      variant: "h5",
      children: "How It Works",
      align: "center",
    },
  },
  HOW_IT_WORKS_DESCRIPTION_CONFIG: {
    typographyProps: {
      variant: "h6",
      // align: { xs: "center", md: "left" },
      children:
        "This innovative AI-powered scholarship searcher revolutionizes the way users discover relevant scholarships by utilizing natural language queries. It enables users to simply type a question in plain English—like \"Show me scholarships for OBC students in Delhi\"—and seamlessly converts that request into a precise SQL query, searching the database for the most fitting results. At its core, this system harnesses the advanced capabilities of Google’s Gemini AI, which expertly interprets user queries and translates them into well-structured SQL statements. This powerful approach eliminates the complexities of understanding and writing database languages, making it incredibly easy for users to explore and apply for scholarships tailored to their needs. With this AI-driven tool, finding financial support for education becomes intuitive, accessible, and user-friendly.",
      sx: {

        color: "gray",
      },
    },
  },
  //   TECHSTACK_HEADER_CONFIG: {
  //     typographyProps: {
  //       variant: "h5",
  //       children: "Tech Stack",
  //       align: "center",
  //     },
  //   },
  //   TECHSTACK_DESCRIPTION_CONFIG: {
  //     typographyProps: {
  //       variant: "h6",
  //       children:
  //         "Our platform uses AI-powered search to match students with scholarships that fit their profile.",
  //       align: "center",
  //       sx: {
  //         color: "gray",
  //       },
  //     },
  //   },
  SEARCH_QUERIES: [
    "scholarship for SC student in Chennai",
    "scholarship for amount greater than 80000",
    "scholarship for student disabled",
    "scholarship for girl student",
  ],
};
