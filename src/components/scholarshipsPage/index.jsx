import {
  Container,
  Dropdown,
  Input,
  Paper,
  Stack,
  Typography,
} from "@/components";
import { SCHOLARSHIP_PAGE_CONFIG } from "@/constants";
import { useGetAllScholarships } from "@/api";
import Scholarships from "./scholarships";

function ScholarshipsPage() {
  const {
    HEADER_CONFIG,
    SEARCH_INPUT,
    SCHOLARSHIP_CATEGORY_DROPDOWN,
    SCHOLARSHIP_RELIGION_DROPDOWN,
    SCHOLARSHIP_LOCATION_DROPDOWN,
  } = SCHOLARSHIP_PAGE_CONFIG;

  const { data, isLoading, isError } = useGetAllScholarships();
  return (
    <>
      <Container
        containerProps={{
          className: "h-[100%] flex flex-col justify-center gap-24 py-12",
        }}
      >
        <Paper
          paperProps={{
            className: "p-4 w-full flex flex-col gap-6",
          }}
        >
          <Stack>
            <Typography {...HEADER_CONFIG} />
          </Stack>
          <Stack
            stackProps={{
              direction: { xs: "column", md: "row" },
              gap: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Input {...SEARCH_INPUT} />
            <Dropdown {...SCHOLARSHIP_CATEGORY_DROPDOWN} />
            <Dropdown {...SCHOLARSHIP_RELIGION_DROPDOWN} />
            <Dropdown {...SCHOLARSHIP_LOCATION_DROPDOWN} />
          </Stack>
        </Paper>
        <Stack stackProps={{ direction: "row", gap: 4, flexWrap: "wrap" }}>
          {data?.data?.map((scholarship) => (
            <Scholarships scholarship={scholarship} />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default ScholarshipsPage;
