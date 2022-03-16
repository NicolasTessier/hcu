import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import useSharedStyles from "../SharedStyles";
import Details from "../components/Details";

function HeroDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sharedStyles = useSharedStyles();

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
      {isFirstRun.current || hero.response !== "success" ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <Details hero={hero} />
      )}
    </div>
  );
}

export default HeroDetails;
