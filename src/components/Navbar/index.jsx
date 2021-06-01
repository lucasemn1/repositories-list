// Styles
import useStyles from "./styles";

// Components
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

// Icons
import { GitHub } from "@material-ui/icons";

// Redux
import { useSelector } from "react-redux";

export default function Navbar() {
  const styles = useStyles();

  const user = useSelector((store) => store.user);

  return (
    <AppBar elevation={0} color="inherit" className={styles.appBar}>
      <Toolbar>
        <Container className={styles.container}>
          <div className={styles.area}>
            <GitHub />
            <Typography variant="h1">Lista de repositórios</Typography>
          </div>
          {user && (
            <div className={styles.area}>
              <Typography variant="h2" className={styles.username}>
                @{user.login}
              </Typography>
              <img
                src={user.avatar_url}
                alt="Foto do Github de Lucas Emanuel"
                className={styles.image}
              />
            </div>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
