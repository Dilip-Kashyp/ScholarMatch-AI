import { Container, Stack, Typography } from "@/components";
import { SCHOLARSHIP_PAGE_CONFIG } from "@/constants";
function ScholarshipsPage() {
  const { HEADER_CONFIG } = SCHOLARSHIP_PAGE_CONFIG;
  return (
    <>
      <Container
        containerProps={{
          className: "h-[100%] mt-36 flex flex-col justify-center gap-36",
        }}
      >
        <Stack>
          <Typography {...HEADER_CONFIG} />
        </Stack>
      </Container>
    </>
  );
}

export default ScholarshipsPage;
