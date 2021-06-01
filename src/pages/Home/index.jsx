// React
import { useEffect, useState } from "react";

// Styles
import useStyles from "./styles";

// Components
import { Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import RepositoryCard from "../../components/RepositoryCard";
import TabPanel from "../../components/TabPanel";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { notificate } from "../../redux/actions/notification";

// Router
import { useHistory } from "react-router-dom";

// Services
import RepositoryService from "../../services/rest/RepositoryService";

function Home() {
  const styles = useStyles();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (!user) {
      const notification = {
        type: "error",
        message: "Por favor, informe seu usuário do github para continuar.",
      };

      history.push("/login");
      dispatch(notificate(notification));
    } else {
      setFavoriteIds(getFavoriteRepositories());
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user) {
      new RepositoryService()
        .getAll("/" + user.login + "/repos")
        .then(({ data }) => {
          setRepositories(
            data.map((repository) => ({
              ...repository,
              favorite: favoriteIds.includes(repository.id),
            }))
          );
        })
        .catch(() => {});
    }
  }, [favoriteIds, setRepositories, user]);

  function changeFavorite(repository, index) {
    const repositoriesCopy = [...repositories];

    repositoriesCopy[index] = {
      ...repository,
      favorite: !repository.favorite,
    };

    setRepositories(repositoriesCopy);
    saveFavorites(repositoriesCopy);
  }

  function saveFavorites(repositoriesToSave) {
    const localData = JSON.parse(localStorage.getItem("repositoryList")).map(
      (userData) => {
        if (userData.owner.username === user.login) {
          userData.favoriteRepositoriyIds = repositoriesToSave
            .filter((repository) => repository.favorite)
            .map(({ id }) => id);
        }

        return userData;
      }
    );

    localStorage.setItem("repositoryList", JSON.stringify(localData));
  }

  function getFavoriteRepositories() {
    const localData = JSON.parse(localStorage.getItem("repositoryList"));

    const localDataFromUser = localData.filter(
      (obj) => obj.owner.username === user.login
    )[0];

    if (!localDataFromUser) {
      localData.push({
        owner: {
          username: user.login,
        },
        favoriteRepositoriyIds: [],
      });

      localStorage.setItem("repositoryList", JSON.stringify(localData));
      return [];
    } else {
      return localDataFromUser.favoriteRepositoriyIds;
    }
  }

  return (
    <Container>
      <Typography variant="h1" className={styles.title}>
        Seus repositórios
      </Typography>

      <Tabs
        value={currentTab}
        onChange={(e, newTab) => setCurrentTab(newTab)}
        aria-label="simple tabs example"
      >
        <Tab label="Todos" />
        <Tab label="Favoritos" />
      </Tabs>

      <TabPanel value={currentTab} index={0}>
        <Grid
          container
          spacing={2}
          className={styles.cardListArea}
          alignContent="center"
        >
          {repositories.map((repository, index) => (
            <Grid item md={4} sm={6} xs={12} key={index}>
              <RepositoryCard
                stars={repository.stargazers_count}
                name={repository.name}
                id={repository.id}
                favorite={repository.favorite}
                updatedAt={repository.updated_at}
                onChangeFavorite={() => changeFavorite(repository, index)}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={currentTab} index={1}>
        <Grid
          container
          spacing={2}
          className={styles.cardListArea}
          alignContent="center"
        >
          {repositories.map((repository, index) => {
            if (repository.favorite) {
              return (
                <Grid item md={4} sm={6} xs={12} key={index}>
                  <RepositoryCard
                    stars={repository.stargazers_count}
                    name={repository.name}
                    id={repository.id}
                    favorite={repository.favorite}
                    updatedAt={repository.updated_at}
                    onChangeFavorite={() => changeFavorite(repository, index)}
                  />
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </TabPanel>
    </Container>
  );
}

export default Home;
