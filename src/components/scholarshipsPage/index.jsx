import {
  Container,
  Input,
  Paper,
  Stack,
  Typography,
  Notification,
  LoadingButton,
  Scholarships,
} from "@/components";
import { SCHOLARSHIP_PAGE_CONFIG } from "@/constants";
import { useGetAllScholarships } from "@/api";
import { getresponseError, useForm, useNotification } from "@/helper";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

function ScholarshipsPage() {
  const {
    HEADER_CONFIG,
    SEARCH_INPUT,
    APPLICATION_COUNTER,
    NOTIFICATIONS_MESSAGES,
  } = SCHOLARSHIP_PAGE_CONFIG;
  const [data, setData] = useState([]);
  const [scholarshipCount, setScholarshipCount] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; 

  const { showNotification } = useNotification();

  const getAllScholarships = useGetAllScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        setData(response);
        setScholarshipCount(response?.data?.length || 0);
        showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
      },
      onError: (error) => {
        console.error(error);
        showNotification({ ...getresponseError(error) });
      },
    },
  });

  const handleFormSuccess = ({ values }) => {
    setPage(1);
    getAllScholarships.mutate({ data: { searchQuery: values.searchQuery } });
  };

  useEffect(() => {
    getAllScholarships.mutate({ data: { searchQuery: "" } });
  }, []);

  const { onSubmit, errorObj, onBlur, onChange } = useForm({
    initialValues: {
      searchQuery: "",
    },
    onSuccess: handleFormSuccess,
  });

  return (
    <>
      <Container
        containerProps={{
          className: "min-h-screen flex flex-col gap-24 py-12",
        }}
      >
        <Paper
          paperProps={{
            className: "p-4 w-full flex flex-col gap-6",
          }}
        >
          <Stack>
            <Typography {...HEADER_CONFIG} />
            <Typography {...APPLICATION_COUNTER(scholarshipCount)} />
          </Stack>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(e);
            }}
          >
            <Stack
              stackProps={{
                direction: { xs: "column", md: "row" },
                gap: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Input {...SEARCH_INPUT} onChange={onChange} onBlur={onBlur} />
            </Stack>
            <Stack stackProps={{ direction: "row", gap: 2 }}>
              <LoadingButton
                loading={getAllScholarships.isPending}
                buttonProps={{
                  variant: "contained",
                  children: !getAllScholarships.isPending
                    ? "Search"
                    : "Hold on!",
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
        </Paper>
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
      </Container>
    </>
  );
}

export default ScholarshipsPage;
