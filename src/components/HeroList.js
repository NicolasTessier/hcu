import Hero from "./Hero";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
  },
  item: {
    height: "300px",
    width: "225px",
    padding: "10px",
    "@media (max-width: 700px)": {
      paddingBottom: "70px",
    },
    "@media (max-width: 550px)": {
      height: "200px",
      width: "150px",
    },
  },
});

const HeroesList = ({ heroes }) => {
  const styles = useStyles();
  return (
    <ul className={styles.list}>
      {heroes.map((hero, key) => (
        <li key={key} className={styles.item}>
          <Hero hero={hero} />
        </li>
      ))}
    </ul>
  );
};

export default HeroesList;
