import { createUseStyles } from "react-jss";

const useSharedStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15vh",
  },
});

export default useSharedStyles;
