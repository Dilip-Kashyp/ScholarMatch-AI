"use client";

import { useEffect } from "react";
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
import { useProfileDetails, useGetCreateProfile } from "@/api";

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

  const { onSubmit, onBlur, onChange, formValuesObj, setValues } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      category: "",
      religious: "",
      gender: "",
      age: "",
      academicDetails: "",
      location: "",
    },
    onSuccess: ({ values }) => {
      registerUser.mutate({
        data: {
          name: values.name,
          email: values.email,
          category: values.category,
          religious: values.religious,
          gender: values.gender,
          age: values.age,
          academicDetails: values.academicDetails,
          location: values.location,
          password: values.password,
        },
      });
    },
  });

  const profileDetails = useProfileDetails({
    mutationConfig: {
      onSuccess: (res) => {
        const data = res.data;
        setValues({
          name: data.name || "",
          email: data.email || "",
          password: data.password || "",
          category: data.category || "",
          religious: data.religious || "",
          gender: data.gender || "",
          age: data.age || "",
          academicDetails: data.academicDetails || "",
          location: data.location || "",
        });
      },
      onError: (error) => {
        showNotification({
          ...getresponseError(error),
        });
      },
    },
  });

  useEffect(() => {
    profileDetails.mutate({});
  }, []);

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
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Stack
            stackProps={{
              width: { sm: "50%", xs: "100%" },
              alignItems: "center",
              justifyContent: "flex-start",
              padding: { sm: 4, xs: 2 },
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
              <Input
                {...NAME_INPUT}
                value={formValuesObj?.name}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Input
                {...EMAIL_INPUT}
                value={formValuesObj?.email}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Input
                {...CASTE_INPUT}
                name="category"
                value={formValuesObj?.category}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Dropdown
                {...RELIGION_DROPDOWN}
                name="religious"
                onChange={onChange}
                value={formValuesObj?.religious}
                onBlur={onBlur}
              />
            </Stack>
          </Stack>

          <Stack
            stackProps={{
              width: { sm: "50%", xs: "100%" },
              alignItems: "center",
              justifyContent: "flex-start",
              padding: { sm: 4, xs: 2 },
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
                name="gender"
                onChange={onChange}
                value={formValuesObj?.gender}
                onBlur={onBlur}
              />
              <Input
                {...AGE_INPUT}
                value={formValuesObj?.age}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Dropdown
                {...LOCATION_DROPDOWN}
                name="location"
                onChange={onChange}
                value={formValuesObj?.location}
                onBlur={onBlur}
              />
              <Input
                {...ACADEMIC_DETAILS_INPUT}
                value={formValuesObj?.academicDetails}
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
