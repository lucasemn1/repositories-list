// Components
import { Alert } from "@material-ui/lab";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../../redux/actions/notification";

// Styles
import useStyles from "./styles";

export default function NotificationManager() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const notifications = useSelector((state) => state.notification);

  return (
    <div className={styles.notificationManager}>
      {notifications.map((notification, index) => (
        <Alert
          key={index}
          variant="filled"
          severity={notification.type ?? "info"}
          onClose={() => {
            dispatch(removeNotification(notification));
          }}
        >
          {notification.message}
        </Alert>
      ))}
    </div>
  );
}
