import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  powerbar: {
    margin: "5px 0",
    width: "100%",
    height: "25px",
    display: "flex",
    flexDirection: "row",
  },
  box: {
    height: "100%",
    width: "10%",
    backgroundColor: "yellow",
    border: "solid 2px black",
  },
  empty: {
    backgroundColor: "white",
  },
});
const MAX_STAT = 10;

function Powerbar({ value }) {
  const styles = useStyles();

  const stat = Math.round(value / 10);

  return (
    <div className={styles.powerbar}>
      {Array.from({ length: stat }, (v, k) => (
        <div className={styles.box} key={k} />
      ))}
      {Array.from({ length: MAX_STAT - stat }, (v, k) => (
        <div className={styles.box + " " + styles.empty} key={k} />
      ))}
    </div>
  );
}
export default Powerbar;
