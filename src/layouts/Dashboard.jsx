// Components
import Navbar from "../components/Navbar";

// Styles
import useStyles from "../styles/global";

export function Dashboard({ children }) {
  const styles = useStyles();

  return (
    <>
      <div className={styles.root}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
