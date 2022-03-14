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
    minWidth: "225px",
    padding: "10px",
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
