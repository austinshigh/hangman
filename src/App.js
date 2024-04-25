import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnePlayer from "./pages/OnePlayer";
import TwoPlayer from "./pages/TwoPlayer/TwoPlayer";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Layout from "./Layout";
import { useState } from "react";

function Hangman() {
  const [totalWins, setTotalWins] = useState(0);
  const [totalGuessesForWins, setTotalGuessesForWins] = useState(0);

  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(100);
  const [guessLimit, setGuessLimit] = useState(6);

  // functions for OnePlayer

  const incrementTotalWins = () => {
    setTotalWins(totalWins + 1);
  };

  const addToTotalGuessesForWins = (count) => {
    setTotalGuessesForWins(totalGuessesForWins + count);
  };

  // functions for settings page

  const handleSetLowerBound = (number) => {
    setLowerBound(number);
  };

  const handleSetUpperBound = (number) => {
    setUpperBound(number);
  };

  const handleSetGuessLimit = (number) => {
    setGuessLimit(number);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
            path="one-player"
            element={
              <OnePlayer
                guessLimit={guessLimit}
                lowerBound={lowerBound}
                upperBound={upperBound}
                addToTotalGuessesForWins={addToTotalGuessesForWins}
                incrementTotalWins={incrementTotalWins}
              />
            }
          />
          <Route path="two-player" element={<TwoPlayer />} />
          <Route
            path="settings"
            element={
              <Settings
                lower={lowerBound}
                upper={upperBound}
                guesses={guessLimit}
                handleSetLowerBound={handleSetLowerBound}
                handleSetUpperBound={handleSetUpperBound}
                handleSetGuessLimit={handleSetGuessLimit}
              />
            }
          />
          <Route
            path="stats"
            element={<Stats wins={totalWins} guesses={totalGuessesForWins} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Hangman;
