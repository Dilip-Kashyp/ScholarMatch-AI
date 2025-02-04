import { Container, Paper, Stack, Typography } from "@/components";
import { ABOUT_PAGE_CONFIG, SEARCH_QUERIES } from "@/constants";

function AboutPage() {
  const {
    HEADER_CONFIG,
    DESCRIPTION_CONFIG,
    HOW_IT_WORKS_HEADER_CONFIG,
    HOW_IT_WORKS_DESCRIPTION_CONFIG,
    SEARCH_QUERY_CONFIG,
    SEARCH_QUERIES,
  } = ABOUT_PAGE_CONFIG;
  return (
    <>

      <Container
        containerProps={{
          className: "min-h-screen flex flex-col  items-center gap-24 py-12",
        }}
      >
        <Paper
          paperProps={{
            className: "p-4 md:p-8 min-w-[80%] max-w-[100%] flex flex-col gap-6",
          }}
        >
          <Stack

            stackProps={{ direction: "column", gap: 3,  }}
          >
            <Typography {...HEADER_CONFIG} />
            <Typography {...DESCRIPTION_CONFIG} />
            <Stack
              stackProps={{ direction: "column", gap: 3 }}
            >
              {SEARCH_QUERIES?.map((query, index) => (
                <Typography key={index} {...SEARCH_QUERY_CONFIG(query)} />
              ))}
            </Stack>
          </Stack>
          <Stack

            stackProps={{ direction: "column", gap: 3, alignItems: "center" }}

          >
            <Typography {...HOW_IT_WORKS_HEADER_CONFIG} />
            <Typography {...HOW_IT_WORKS_DESCRIPTION_CONFIG} />
          </Stack>
          {/* <Stack
            stackProps={{ direction: "column", gap: 3, alignItems: "center", }}
          >
            <Typography {...TECHSTACK_HEADER_CONFIG} />
            <Typography {...TECHSTACK_DESCRIPTION_CONFIG} />
          </Stack> */}
        </Paper>
      </Container>
    </>
  );
}

export default AboutPage;
