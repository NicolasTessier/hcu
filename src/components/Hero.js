import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  hero: {
    position: "relative",
    height: "100%",
    "&:hover $hover": {
      display: "flex",
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  noImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    backgroundColor: "gray",
  },
  hover: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    padding: "0 20px",
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "italic",
    userSelect: "none",
  },
});

const Hero = ({ hero }) => {
  const styles = useStyles();

  return (
    <div className={styles.hero}>
      <Link to={`/hero/${hero.id}`}>
        {hero.image.url ? (
          <img className={styles.img} alt={hero.name} src={hero.image.url} />
        ) : (
          <div className={styles.img + " " + styles.noImage} />
        )}
      </Link>
      <Link to={`/movie/${hero.id}`}>
        <div className={styles.hover}>
          <p className={styles.title}>{hero.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
