import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Favourites from "./screens/Favourites";
import Hero from "./screens/Hero";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
        <main>
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
