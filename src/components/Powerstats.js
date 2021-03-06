import { createUseStyles } from "react-jss";
import Powerbar from "./Powerbar";
import React from "react";

const useStyles = createUseStyles({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stats: {
    width: "100%",
    maxWidth: "80%",
    color: "white",
    fontSize: 30,
    lineHeight: "40px",
    padding: "10px 0",
    fontStyle: "italic",
    "@media (max-width: 1200px)": {
      maxWidth: "100%",
    },
  },
  doubleDot: {
    color: "yellow",
  },
});

function Powerstats({ powerstats }) {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      {Object.entries(powerstats).map(([name, stat]) => (
        <React.Fragment key={name}>
          {stat !== "null" && (
            <div className={styles.stats}>
              <p>
                {name.charAt(0).toUpperCase() + name.slice(1)}
                <span className={styles.doubleDot}> :</span>
              </p>
              <Powerbar value={stat} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
export default Powerstats;
