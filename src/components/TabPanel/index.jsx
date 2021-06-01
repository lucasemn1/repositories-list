// Styles
import useStyles from "./styles";

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const styles = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={styles.tabPanel}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
