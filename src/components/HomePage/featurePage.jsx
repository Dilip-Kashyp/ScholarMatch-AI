import { Stack, Typography, Container } from "@/components";
import FeatureCard from "./featureCard";
import { FEATURE_PAGE_CONFIG } from "@/constants";

function FeaturePage() {
  const { FEATURES, HEADER_CONFIG } = FEATURE_PAGE_CONFIG;

  return (
    <Stack stackProps={{gap: 8}}>
      <Typography {...HEADER_CONFIG} />
      <Stack 
        stackProps={{   
          direction: 'row',
          flexWrap: 'wrap',
          gap: 6,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '100px',
        }}
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default FeaturePage;