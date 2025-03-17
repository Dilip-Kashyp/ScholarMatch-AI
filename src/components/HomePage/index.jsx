import { useRef, useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Input,
  Notification,
  LoadingButton,
  Scholarships,
} from "../common";
import { HOME_PAGE_CONFIG } from "@/constants";
import { useForm, useNotification } from "@/helper";
import { useGetSearchedScholarships } from "@/api";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const scholarshipsRef = useRef(null);
  const { showNotification } = useNotification();
  const { HEADER_CONFIG, BUTTON_CONFIG, INPUT_FIELD, NOTIFICATIONS_MESSAGES } =
    HOME_PAGE_CONFIG;

  const { mutate: getScholarshipsData } = useGetSearchedScholarships({
    mutationConfig: {
      onSuccess: (response) => {
        if (response?.data?.length > 0) {
          setData(response);
          showNotification(NOTIFICATIONS_MESSAGES.SUCCESS);
          setIsLoading(false);
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
      onError: () => {
        setIsLoading(false);
        showNotification(NOTIFICATIONS_MESSAGES.ERROR);
      },
    },
  });

  const handleFormSuccess = ({ values }) => {
    if (values.searchQuery) {
      getScholarshipsData(values.searchQuery);
      setIsLoading(true);
    } else {
      showNotification(NOTIFICATIONS_MESSAGES.SEARCH_ERROR);
    }
  };

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
              <LoadingButton loading={isLoading} {...BUTTON_CONFIG} />
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
            {data?.data?.map((scholarship) => (
              <Scholarships key={scholarship.id} scholarship={scholarship} />
            ))}
          </Stack>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
