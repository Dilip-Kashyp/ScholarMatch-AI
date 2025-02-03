import { Stack, Typography } from "@/components";
import { FOOTER_CONFIG } from "@/constants";

function Footer() {
  const { FOOTER_TEXT, FOOTER_TEXT_2 } = FOOTER_CONFIG;
  return (
    <Stack
      stackProps={{
        component: "footer",
        gap: 2,
        sx: {
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "auto",
          width: "100%",
        },
      }}
    >
      <Typography {...FOOTER_TEXT} />
      {/* <Typography {...FOOTER_TEXT_2} /> */}
    </Stack>
  );
}

export default Footer;
