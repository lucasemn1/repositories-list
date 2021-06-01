// Components
import { Card, IconButton, Typography } from "@material-ui/core";
import { Favorite, FavoriteBorder, Star } from "@material-ui/icons";

// Styles
import useStyles from "./styles";

// Utils
import { getFormattedStringDate } from "../../utils/date";

export default function RepositoryCard(props) {
  const { id, name, favorite, onChangeFavorite, updatedAt, stars } = props;
  const styles = useStyles();

  function renderFavoriteButton() {
    return favorite ? (
      <IconButton
        aria-label="favorite"
        color="secondary"
        onClick={onChangeFavorite}
      >
        <Favorite />
      </IconButton>
    ) : (
      <IconButton
        color="inherit"
        className={styles.favoriteBorder}
        onClick={onChangeFavorite}
      >
        <FavoriteBorder />
      </IconButton>
    );
  }

  return (
    <Card className={styles.card} elevation={0}>
      <div className={styles.idArea}>
        <Typography variant="h5" className={styles.id}>
          <strong>#{id}</strong>
        </Typography>

        <span className={styles.starsArea}>
          <strong>{stars}</strong>
          <Star fontSize="small" />
        </span>
      </div>

      <Typography variant="h6" className={styles.titleArea}>
        {name}
      </Typography>

      <footer className={styles.footer}>
        <span>
          <strong>Atual. em:</strong>{" "}
          {getFormattedStringDate(new Date(updatedAt))}
        </span>
        {renderFavoriteButton()}
      </footer>
    </Card>
  );
}
