import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";

function Loader({ loaderProps }) {
  return (
    <Backdrop {...loaderProps}>
      <Image src={"/loader.gif"} width={250} height={200} alt={"Loader"} />
    </Backdrop>
  );
}

export default Loader;
