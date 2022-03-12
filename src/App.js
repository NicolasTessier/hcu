import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Favourites from "./screens/Favourites";
import Hero from "./screens/Hero";
import Header from "./components/Header";
import { createUseStyles } from "react-jss";

import bgImg from "./assets/bg.png";

const useStyles = createUseStyles({
  main: {
    height: "100vh",
    backgroundImage: `url(${bgImg})`,
    backgroundBlendMode: "multiply",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

function App() {
  const styles = useStyles();

  return (
    <BrowserRouter>
      <main className={styles.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/hero/:id" element={<Hero />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
