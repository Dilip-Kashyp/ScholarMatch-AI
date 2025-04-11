import { useState } from "react";
import {
  Button,
  Input,
  Stack,
  Typography,
  Container,
  LoadingButton,
  Dropdown,
} from "@/components";
import { DASHBOARD_URL, PROFILE_PAGE_CONFIG } from "@/constants";
import { useRouter } from "next/router";
import { getresponseError, useForm, useNotification } from "@/helper";
import { useGetCreateProfile } from "@/api";

function ProfilePage() {
  const {
    REGISTRATION_HEADER,
    EMAIL_INPUT,
    BUTTON,
    NAME_INPUT,
    CASTE_INPUT,
    RELIGION_DROPDOWN,
    GENDER_DROPDOWN,
    AGE_INPUT,
    LOCATION_DROPDOWN,
    ACADEMIC_DETAILS_INPUT,
    BACKGROUND_DETAILS,
    NOTIFICATION_CONFIG,
  } = PROFILE_PAGE_CONFIG;

  const router = useRouter();
  const { showNotification } = useNotification();

  const registerUser = useGetCreateProfile({
    mutationConfig: {
      onSuccess: () => {
        showNotification({
          ...NOTIFICATION_CONFIG.SUCCESS,
        });
        router.push(DASHBOARD_URL);
      },
      onError: (error) => {
        showNotification({
          ...getresponseError(error),
        });
      },
    },
  });

  function handleFormSuccess({ values }) {
    registerUser.mutate({
      data: {
        name: values.name,
        email: values.email,
        caste: values.caste,
        religion: values.religion,
        gender: values.gender,
        age: values.age,
        academicDetails: values.academicDetails,
        location: values.location,
        password: values.password,
      },
    });
  }

  const { onSubmit, errorObj, onBlur, onChange, formValuesObj } = useForm({
    initialValues: {
      name: "",
      email: "",
      caste: "",
      religion: "",
      gender: "",
      age: "",
      academicDetails: "",
      location: "",
    },
    onSuccess: handleFormSuccess,
  });

  return (
    <Container
      containerProps={{
        className: "flex flex-col sm:flex-row w-full min-h-screen",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        style={{ width: "100%" }}
      >
        <Stack
          stackProps={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Stack
            stackProps={{
              width: "50%",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 4,
            }}
          >
            <Stack stackProps={{ alignItems: "center", marginBottom: 4 }}>
              <Typography {...REGISTRATION_HEADER} />
            </Stack>

            <Stack
              stackProps={{
                gap: 3,
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <Input {...NAME_INPUT} onChange={onChange} onBlur={onBlur} />
              <Input {...EMAIL_INPUT} onChange={onChange} onBlur={onBlur} />
              <Input {...CASTE_INPUT} onChange={onChange} onBlur={onBlur} />
              <Dropdown
                {...RELIGION_DROPDOWN}
                onChange={onChange}
                value={formValuesObj?.religion}
                onBlur={onBlur}
              />
            </Stack>
          </Stack>

          <Stack
            stackProps={{
              width: "50%",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 4,
            }}
          >
            <Stack stackProps={{ alignItems: "center", marginBottom: 4 }}>
              <Typography {...BACKGROUND_DETAILS} />
            </Stack>

            <Stack
              stackProps={{
                gap: 3,
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <Dropdown
                {...GENDER_DROPDOWN}
                onChange={onChange}
                value={formValuesObj?.gender}
                onBlur={onBlur}
              />
              <Input {...AGE_INPUT} onChange={onChange} onBlur={onBlur} />
              <Dropdown
                {...LOCATION_DROPDOWN}
                onChange={onChange}
                value={formValuesObj?.location}
                onBlur={onBlur}
              />
              <Input
                {...ACADEMIC_DETAILS_INPUT}
                onChange={onChange}
                onBlur={onBlur}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Common Submit Button */}
        <Stack
          stackProps={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <LoadingButton {...BUTTON} />
        </Stack>
      </form>
    </Container>
  );
}

export default ProfilePage;
