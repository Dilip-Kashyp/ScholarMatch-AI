"use client";
import { createContext, useCallback, useState } from "react";
import { Notification } from "@/components";

export const NotificationContext = createContext({
  showNotification: ({ message }) => {},
  hideNotification: () => {},
});

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const hideNotification = useCallback(() => {
    setNotification({ ...notification, open: false });
  }, [notification]);

  const showNotification = useCallback(
    ({ message, duration = 3000 }) => {
      setNotification({ open: true, message });
      setTimeout(() => {
        hideNotification();
      }, duration);
    },
    [hideNotification]
  );

  return (
    <NotificationContext.Provider
      value={{ hideNotification, showNotification }}
    >
      <Notification
        {...notification}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
