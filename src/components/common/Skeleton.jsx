import { Skeleton as MUISkeleton } from "@mui/material";

function Skeleton({
  variant = SkeletonVariantEnum.RECTANGULAR,
  width = 50,
  height = 50,
  ...rest
}) {
  return (
    <>
      <MUISkeleton variant={variant} width={width} height={height} {...rest} />
    </>
  );
}

export default Skeleton;
