import { Container } from "@/components";
import FeaturePage from "./featurePage";

function AboutPage() {
  return (
    <>
      <Container
        containerProps={{
          className: "min-h-screen flex flex-col   items-center gap-24 py-12",
        }}
      >
        <FeaturePage />
      </Container>
    </>
  );
}

export default AboutPage;
