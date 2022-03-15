import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../stores/favouritesStore";

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
  starOff: {
    "&:hover": {
      fill: "yellow",
    },
  },
  favourite: {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 10,
    width: "30px",
    cursor: "pointer",
    userSelect: "none",
  },
  name: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    "@media (min-width: 700px)": {
      display: "none",
    },
  },
});

const Hero = ({ hero }) => {
  const styles = useStyles();
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const toggleFavourite = (event) => {
    event.preventDefault();
    dispatch(actions.toggle({ hero }));
  };

  const isFavourite = () => {
    return favourites.find((favourite) => favourite.id === hero.id);
  };

  return (
    <div className={styles.hero}>
      <Link to={`/hero/${hero.id}`}>
        {hero.image.url ? (
          <img className={styles.img} alt={hero.name} src={hero.image.url} />
        ) : (
          <div className={styles.img + " " + styles.noImage} />
        )}
      </Link>
      <Link to={`/hero/${hero.id}`}>
        <div className={styles.hover}>
          <p className={styles.title}>{hero.name}</p>
        </div>
      </Link>
      <div className={styles.favourite} onClick={toggleFavourite}>
        <svg viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.0554 0.717385C15.3667 -0.178175 16.6333 -0.178173 16.9446 0.717387L20.0036 9.51779C20.1409 9.91286 20.5096 10.1807 20.9278 10.1893L30.2427 10.3791C31.1907 10.3984 31.582 11.6029 30.8265 12.1757L23.4021 17.8045C23.0688 18.0572 22.928 18.4906 23.0491 18.891L25.7471 27.8087C26.0216 28.7162 24.997 29.4606 24.2187 28.9191L16.5712 23.5975C16.2279 23.3586 15.7721 23.3586 15.4288 23.5975L7.78127 28.9191C7.00303 29.4606 5.97839 28.7162 6.25294 27.8087L8.95089 18.891C9.07201 18.4906 8.93118 18.0572 8.59788 17.8045L1.17348 12.1757C0.417952 11.6029 0.809334 10.3984 1.75726 10.3791L11.0722 10.1893C11.4904 10.1807 11.8591 9.91286 11.9964 9.51779L15.0554 0.717385Z"
            fill={isFavourite() ? "yellow" : "white"}
            className={!isFavourite() ? styles.starOff : {}}
          />
        </svg>
      </div>
      <p className={styles.name}>{hero.name}</p>
    </div>
  );
};

export default Hero;
