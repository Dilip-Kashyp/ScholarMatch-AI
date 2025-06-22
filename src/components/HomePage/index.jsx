import { useEffect, useRef, useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Input,
  LoadingButton,
  Scholarships,
} from "../common";
import { HOME_PAGE_CONFIG } from "@/constants";
import { getresponseError, useForm, useNotification } from "@/helper";
import { useGetAllScholarships } from "@/api";
import { Pagination } from "@mui/material";

function HomePage() {
  const [data, setData] = useState([]);
  const scholarshipsRef = useRef(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const { showNotification } = useNotification();
  const { HEADER_CONFIG, INPUT_FIELD, NOTIFICATIONS_MESSAGES } =
    HOME_PAGE_CONFIG;

  const scholarshipsData = useGetAllScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        if (response?.data?.length > 0) {
          setData(response);
          showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
          setTimeout(() => {
            if (scholarshipsRef.current) {
              scholarshipsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 300);
        } else {
          showNotification(NOTIFICATIONS_MESSAGES.ERROR);
        }
      },
      onError: (err) => {
        showNotification({ ...getresponseError(err) });
      },
    },
  });

  const handleFormSuccess = ({ values }) => {
    setPage(1);
    scholarshipsData.mutate({ data: { searchQuery: values.searchQuery } });
  };

  useEffect(() => {
    scholarshipsData.mutate({ data: { searchQuery: "" } });
  }, []);

  const { onSubmit, onChange, onBlur } = useForm({
    initialValues: {
      search: "",
    },
    onSuccess: handleFormSuccess,
  });

  return (
    <>
      <Container
        containerProps={{
          className: "h-full mt-32 flex flex-col justify-center gap-36",
        }}
      >
        <Stack
          stackProps={{
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 8, sm: 6 },
          }}
        >
          <Typography {...HEADER_CONFIG} />
          <form onSubmit={onSubmit}>
            <Stack
              stackProps={{
                direction: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Input {...INPUT_FIELD} onChange={onChange} onBlur={onBlur} />
              <LoadingButton
                loading={scholarshipsData.isPending}
                buttonProps={{
                  variant: "contained",
                  children: !scholarshipsData.isPending ? "Search" : "Hold on!",
                  size: "large",
                  type: "submit",
                  sx: {
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#2c3e50",
                    },
                  },
                }}
              />
            </Stack>
          </form>
        </Stack>
        <div ref={scholarshipsRef} className="w-full">
          <Stack
            stackProps={{
              direction: "row",
              gap: 4,
              flexWrap: "wrap",
              className: "flex-grow",
            }}
          >
            {data?.data
              ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((scholarship) => (
                <Scholarships key={scholarship.id} scholarship={scholarship} />
              ))}
          </Stack>
          {data?.data?.length > itemsPerPage && (
            <Stack stackProps={{ alignItems: "center", mt: 4 }}>
              <Pagination
                count={Math.ceil(data.data.length / itemsPerPage)}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
              />
            </Stack>
          )}
        </div>
      </Container>
    </>
  );
}

export default HomePage;
