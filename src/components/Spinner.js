import { TailSpin } from "react-loader-spinner";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  spinner: { marginTop: "50px" },
});

function Spinner() {
  const styles = useStyles();

  return (
    <TailSpin
      wrapperClass={styles.spinner}
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
}
export default Spinner;
