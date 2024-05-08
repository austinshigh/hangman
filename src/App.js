import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnePlayer from "./pages/OnePlayer";
import TwoPlayer from "./pages/TwoPlayer/TwoPlayer";
import Homepage from "./pages/Homepage";
import Layout from "./Layout";

function Hangman() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="one-player" element={<OnePlayer />} />
          <Route path="two-player" element={<TwoPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Hangman;
