import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100vw",
    minHeight: "100vh",
    padding: 0,
    display: "flex",
    paddingTop: 100,
  },
  outlineInput: {
    color: theme.palette.text.primary,
    outline: theme.palette.text.primary,

    "& fieldset": {
      borderColor: theme.palette.text.primary,
    },

    "& input": {
      paddingLeft: "1rem",
    },
  },
  inputLabel: {
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
