import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.paper,
    padding: "1.5rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    width: "100%",
  },

  idArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "1rem",
    borderBottom: `1px solid ${theme.palette.background.default}`,
  },

  titleArea: {
    flex: 1,
  },

  id: {
    fontSize: "1rem",
  },

  starsArea: {
    display: "flex",
    alignItems: "center",
    gap: "0.1rem",
  },

  primaryColor: {
    color: theme.palette.primary.main,
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  favoriteBorder: {
    color: theme.palette.text,
  },
}));

export default useStyles;
