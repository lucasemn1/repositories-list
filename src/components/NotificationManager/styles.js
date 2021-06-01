import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  notificationManager: {
    height: "min-content",
    position: "fixed",
    zIndex: 2,
    bottom: "2rem",
    right: "50%",
    transform: "translate(50%, 0)",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
});

export default useStyles;
