import { Snackbar } from "@mui/material";

function Notification(notificationProps) {
  return (
    <>
      <Snackbar {...notificationProps} />
    </>
  );
}

export default Notification;
