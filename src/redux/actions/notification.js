import { NOTIFICATE, REMOVE_NOTIFICATION } from "../constants/notification";

export function notificate(notification) {
  return {
    type: NOTIFICATE,
    payload: notification,
  };
}

export function removeNotification(notification) {
  return {
    type: REMOVE_NOTIFICATION,
    payload: notification,
  };
}
