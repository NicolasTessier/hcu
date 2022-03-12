import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <NavLink
                    to={"/"}
                    className={({ isActive }) => (isActive ? "link active" : "link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to={"/favourites"}
                    className={({ isActive }) => (isActive ? "link active" : "link")}
                >
                    Favoris
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;
