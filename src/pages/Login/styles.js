import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  page: {
    width: "100%",
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "90%",
    maxWidth: "30rem",
    backgroundColor: theme.palette.background.paper,
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.8rem",
  },
}));

export default useStyles;
