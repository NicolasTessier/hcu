import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import useSharedStyles from "../SharedStyles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  firstSection: {
    "@media (max-width: 900px)": {
      height: "auto",
    },
    height: "85vh",
    width: "100%",
  },
  title: {
    fontStyle: "italic",
    fontWeight: 700,
    fontSize: 40,
    textAlign: "center",
    color: "yellow",
  },
  img: {
    height: "60vh",
    padding: "0 10px",
    "@media (max-width: 900px)": {
      height: "auto",
      maxWidth: "90%",
    },
  },
  hero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  heroInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60vh",
    width: "50%",
    padding: "0 10px",
    "@media (max-width: 900px)": {
      height: "auto",
      margin: "50px 0",
    },
  },
  characteristic: {
    fontSize: 30,
    lineHeight: "40px",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
  },

  section: {
    paddingBottom: "50px",
  },
});

function HeroDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sharedStyles = useSharedStyles();
  const styles = useStyles();

  useEffect(() => {
    dispatch({ type: "FETCH_HERO", id: params.id });
  }, [dispatch, params.id]);

  const isFirstRun = useRef(true);
  const hero = useSelector((state) => state.details);
  console.log(hero);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (hero.response !== "success") navigate("/");
  }, [hero, navigate]);

  const { race, height, weight } = hero.appearance;
  const { aliases, alignment, publisher } = hero.biography;
  const { base, occupation } = hero.work;
  const alterEgos = hero.biography["alter-egos"];
  const fullName = hero.biography["full-name"];
  const placeOfBirth = hero.biography["place-of-birth"];
  const firstAppearance = hero.biography["first-appearance"];

  return (
    <div className={sharedStyles.page}>
      {isFirstRun.current ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <>
          <div className={styles.firstSection}>
            <h1 className={styles.title}>{hero.name}</h1>
            <div className={styles.hero}>
              {hero.image.url && (
                <img
                  className={styles.img}
                  src={hero.image.url}
                  alt={hero.name}
                />
              )}
              <div className={styles.heroInfo}>
                <p className={styles.characteristic}>
                  aliasis : {aliases.join(", ")}
                </p>
                <p className={styles.characteristic}>Race : {race}</p>
                <p className={styles.characteristic}>
                  Alter-egos : {alterEgos}
                </p>
                <p className={styles.characteristic}>Alignment : {alignment}</p>
                <p className={styles.characteristic}>Base : {base}</p>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Personnal informations</h2>
            <p className={styles.characteristic}>Name : {fullName}</p>
            <p className={styles.characteristic}>Occupation : {occupation}</p>
            <p className={styles.characteristic}>
              Height : {height.join(", ")}
            </p>
            <p className={styles.characteristic}>
              Weight : {weight.join(", ")}
            </p>
            <p className={styles.characteristic}>
              Place of Birth : {placeOfBirth}
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Publication</h2>
            <p className={styles.characteristic}>
              First Appearance : {firstAppearance}
            </p>
            <p className={styles.characteristic}>Publisher : {publisher}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default HeroDetails;
