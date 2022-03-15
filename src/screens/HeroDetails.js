import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import useSharedStyles from "../SharedStyles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  title: { color: "yellow", fontSize: 24 },
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

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (hero.response !== "success") navigate("/");
  }, [hero, navigate]);

  return (
    <div className={sharedStyles.page}>
      {isFirstRun.current ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <p className={styles.title}>{hero.name}</p>
      )}
    </div>
  );
}

export default HeroDetails;
