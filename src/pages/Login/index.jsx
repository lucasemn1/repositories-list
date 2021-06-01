// React
import { useEffect, useState } from "react";

// Styles
import useGlobalStyles from "../../styles/global";
import useStyles from "./styles";

// Components
import { ChevronRight, GitHub } from "@material-ui/icons";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { initUser } from "../../redux/actions/user";

// Services
import UserService from "../../services/rest/UserService";
import { notificate } from "../../redux/actions/notification";

// Router
import { useHistory } from "react-router-dom";

export default function Login() {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  async function handleSubmit(event) {
    event.preventDefault();

    new UserService()
      .getAll(`/${username}`)
      .then(({ data }) => {
        dispatch(initUser(data));
      })
      .catch(({ response }) => {
        const notification = {
          type: "error",
          message: "",
        };

        switch (response.status) {
          case 404:
            notification.message = `O usuário ${username} não foi encontrado.`;
            break;

          default:
            notification.message = "Não foi possível fazer a requisição.";
            break;
        }

        dispatch(notificate(notification));
      });
  }

  return (
    <div className={styles.page}>
      <Box component="form" className={styles.form} onSubmit={handleSubmit}>
        <Typography variant="h1">Inseria seu usuário do Github</Typography>

        <FormControl variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            className={globalStyles.inputLabel}
          >
            Usuário *
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            className={globalStyles.outlineInput}
            startAdornment={<GitHub />}
            labelWidth={70}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disableElevation
        >
          Avançar
          <ChevronRight />
        </Button>
      </Box>
    </div>
  );
}
