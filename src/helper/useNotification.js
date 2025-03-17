import { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";

export const useNotification = () => {
  return useContext(NotificationContext);
};
