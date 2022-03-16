import { createUseStyles } from "react-jss";

const useSharedStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15vh",
  },
  placeHolder: {
    color: "yellow",
    fontSize: 24,
    marginTop: "50px",
    textAlign: "center",
    padding: "0 20px",
  },
});

export default useSharedStyles;
