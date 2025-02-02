import { Button, Container, Stack, Typography } from "../common";
import { HOME_PAGE_CONFIG } from "@/constants";
import FeaturePage from "./featurePage";
function HomePage() {
  const { HEADER_CONFIG, BUTTON_CONFIG } = HOME_PAGE_CONFIG;
  return (
    <>
      <Container
        containerProps={{
          className: "h-[100%] mt-36 flex flex-col justify-center gap-36",
        }}
      >
        <Stack
          stackProps={{
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography {...HEADER_CONFIG} />
          <Button {...BUTTON_CONFIG} />
        </Stack>
        <FeaturePage />
      </Container>
    </>
  );
}

export default HomePage;
