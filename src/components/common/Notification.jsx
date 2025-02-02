import { Snackbar } from "@mui/material";

function Notification({ message, open = false, autoHideDuration = 3000, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    />
  );
}


export default Notification;
