import { TailSpin } from "react-loader-spinner";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  spinner: { marginTop: "50px" },
  spinnerCentered: { position: "absolute", top: "50%", left: "50%" },
});

function Spinner({ center }) {
  const styles = useStyles();

  return (
    <TailSpin
      wrapperClass={center ? styles.spinnerCentered : styles.spinner}
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
}
export default Spinner;
