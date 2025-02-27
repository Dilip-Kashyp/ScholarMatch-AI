import { Card, Typography } from "@/components";
import { FEATURE_CARD_CONFIG } from "@/constants";

function FeatureCard({ title, description }) {
  const { TITLE_CONFIG, DESCRIPTION_CONFIG } = FEATURE_CARD_CONFIG;
  return (
    <Card cardProps={{ 
      sx: { 
        width: 400, 
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 3,
        textAlign: 'center',
        borderRadius: 4,
        gap: 2,
        boxShadow: 6,
      } 
    }}>
      <Typography {...TITLE_CONFIG(title)} />
      <Typography {...DESCRIPTION_CONFIG(description)} />
    </Card>
  );
}

export default FeatureCard;

