import { usegetAppliedStatus } from "@/api";
import { CircularProgressIcon } from "@/assets";
import { Button, Paper, Stack, Typography, Container } from "@/components";
import { SCHOLARSHIP_APPLICATION_PAGE_CONFIG } from "@/constants";
import { useEffect, useState } from "react";

function ScholarshipApplicationCard({ data, getAppliedStatus }) {
  const {
    SCHOLARSHIP_NAME,
    SCHOLARSHIP_AMOUNT,
    SCHOLARSHIP_APPLIED,
    SCHOLARSHIP_STATUS,
  } = SCHOLARSHIP_APPLICATION_PAGE_CONFIG;

  return (
    <Container
      containerProps={{
        className: "min-h-screen flex flex-col gap-24 py-12",
      }}
    >
      {getAppliedStatus?.isPending ? (
        <div className="flex justify-center items-center min-h-screen">
          <CircularProgressIcon />
        </div>
      ) : (
        <Stack
          stackProps={{
            gap: 2,
            direction: "row",
            flexWrap: "wrap",
            className: "flex-grow",
            height: "100%",
          }}
        >
          {data?.map((item) => (
            <Paper
              key={item.id}
              paperProps={{
                className: "p-6 rounded-2xl shadow-lg border border-gray-200",
                sx: { width: "100%", backgroundColor: "#f9fafb" },
                elevation: 3,
                style: {
                  backgroundColor: "#f9fafb",
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Stack stackProps={{ gap: 2 }}>
                <Stack
                  stackProps={{
                    direction: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography {...SCHOLARSHIP_NAME(item.Scholarship.name)} />
                  <Typography
                    {...SCHOLARSHIP_AMOUNT(item.Scholarship.amount)}
                  />
                </Stack>

                <Stack stackProps={{ gap: 1 }}>
                  <Typography
                    {...SCHOLARSHIP_APPLIED(
                      new Date(item.createdAt).toLocaleDateString()
                    )}
                  />
                  <Typography {...SCHOLARSHIP_STATUS(item.status)} />
                </Stack>

                <Stack
                  stackProps={{
                    direction: "row",
                    gap: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    buttonProps={{
                      children: "View Details",
                      sx: {
                        backgroundColor: "#2c3e50",
                        color: "white",
                        px: 3,
                        py: 1,
                        borderRadius: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        transition: "0.3s",
                        "&:hover": { backgroundColor: "#1a252f" },
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}
    </Container>
  );
}

export default ScholarshipApplicationCard;
