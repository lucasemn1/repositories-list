import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {},

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  area: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  image: {
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
  },

  username: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
