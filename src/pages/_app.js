import "@/styles/globals.css";
import Head from "next/head";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationProvider } from "@/helper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NotificationProvider>
          <Head>
            <title>ScholarMatch AI</title>
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </NotificationProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}
