export const ABOUT_PAGE_CONFIG = {
  HEADER_CONFIG: {
    typographyProps: {
      variant: "h5",
      children: "How to use our platform",
      align: "center",
    },
  },
  DESCRIPTION_CONFIG: {
    typographyProps: {
      variant: "h6",
      align: "center",
      children:
        "Go to the scholarship page and search for scholarships using the search bar. Search query may be like 'scholarship for SC student in Chennai' or 'scholarship for amount greater than 80000' or 'scholarship for student disabled' or 'scholarship for girl student'",
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
      align: "center",
      children:
        "Integrating modern technologies, this application securely connects to a PostgreSQL database to fetch scholarship records and uses an AI service to convert details into semantic vectors while extracting query parameters. It leverages Gemini functions: one extracts search details (like type, location, and amount) from a user’s query using the Gemini-pro model, and another converts text into vectors with the embedding-001 model. These vectors are stored in a Pinecone index and combined with traditional filters, ensuring students find precise, tailored scholarship recommendations.",
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
};
