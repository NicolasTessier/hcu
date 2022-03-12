import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

import logo from "../assets/logo.png";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "10px",
  },
  link: {
    color: "white",
    padding: "0 10px",
    fontSize: "24px",
  },
  active: {
    color: "yellow",
  },
});

function Header() {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <img src={logo} alt={"logo hcu"} />
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? styles.active + " " + styles.link : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/favourites"}
          className={({ isActive }) =>
            isActive ? styles.active + " " + styles.link : styles.link
          }
        >
          Favoris
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
