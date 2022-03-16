import { createUseStyles } from "react-jss";
import React from "react";

const useStyles = createUseStyles({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "30px",
    marginTop: "50px",
  },
  input: {
    height: "20px",
    padding: "10px",
    border: "none",
    width: "40vw",
    borderBottomLeftRadius: "30px",
    borderTopLeftRadius: "30px",
    paddingLeft: "20px",
    fontSize: "18px",
    "@media (max-width: 700px)": {
      width: "60vw",
    },
  },
  svg: {
    height: "30px",
    padding: "0 10px",
  },
});

const Input = ({ value, onChange }) => {
  const styles = useStyles();

  return (
    <div className={styles.inputContainer}>
      <input
        data-testid="input"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder="Superman..."
      />
      <svg
        className={styles.svg}
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.3958 35.5833H37.3879L36.6763 34.8971C39.1671 31.9996 40.6667 28.2379 40.6667 24.1458C40.6667 15.0213 33.2704 7.625 24.1458 7.625C15.0213 7.625 7.625 15.0213 7.625 24.1458C7.625 33.2704 15.0213 40.6667 24.1458 40.6667C28.2379 40.6667 31.9996 39.1671 34.8971 36.6763L35.5833 37.3879V39.3958L48.2917 52.0788L52.0788 48.2917L39.3958 35.5833ZM24.1458 35.5833C17.8171 35.5833 12.7083 30.4746 12.7083 24.1458C12.7083 17.8171 17.8171 12.7083 24.1458 12.7083C30.4746 12.7083 35.5833 17.8171 35.5833 24.1458C35.5833 30.4746 30.4746 35.5833 24.1458 35.5833Z"
          fill="#323232"
        />
      </svg>
    </div>
  );
};

export default Input;
