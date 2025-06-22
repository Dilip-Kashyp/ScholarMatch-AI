import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/constants";
import { getItem, isPrivateAndPublicRoute, isPrivateRoute } from "@/helper";
import { DashboardLayout, Loader } from "@/components";
import { useRouter } from "next/router";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (
      url,
      urlOptions = {
        shallow: false,
      }
    ) => {
      const accessToken = getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
      if (accessToken && !isPrivateRoute(url)) {
        if (!isPrivateAndPublicRoute(url)) {
        }
      }
      if (!urlOptions?.shallow) {
        setLoading(true);
      }
    };

    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <Loader
      loaderProps={{
        open: true,
        sx: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        },
      }}
    />
  );
}

export default Loading;
