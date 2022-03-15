import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Favourites from "./screens/Favourites";
import HeroDetails from "./screens/HeroDetails";
import Header from "./components/Header";
import { createUseStyles } from "react-jss";

import bgImg from "./assets/bg.png";

const useStyles = createUseStyles({
  main: {
    minHeight: "100vh",
    backgroundImage: `url(${bgImg})`,
    backgroundBlendMode: "multiply",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
});

function App() {
  const styles = useStyles();

  return (
    <BrowserRouter>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/hero/:id" element={<HeroDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
