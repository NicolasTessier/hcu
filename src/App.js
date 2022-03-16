import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Header from "./components/Header";
import { createUseStyles } from "react-jss";

import bgImg from "./assets/bg.png";
import Spinner from "./components/Spinner";

const Favourites = lazy(() => import("./screens/Favourites"));
const HeroDetails = lazy(() => import("./screens/HeroDetails"));

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
          <Route
            path="/favourites"
            element={
              <Suspense fallback={<Spinner center={true} />}>
                <Favourites />
              </Suspense>
            }
          />
          <Route
            path="/hero/:id"
            element={
              <Suspense fallback={null}>
                <HeroDetails />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
