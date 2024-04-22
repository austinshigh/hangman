import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Layout from "./Layout";
import { useState } from "react";

function App() {
  const [totalWins, setTotalWins] = useState(0);
  const [totalGuessesForWins, setTotalGuessesForWins] = useState(0);

  const [lowerBound, setLowerBound] = useState(null);
  const [upperBound, setUpperBound] = useState(null);
  const [guessLimit, setGuessLimit] = useState(null);

  // functions for Homepage

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
          <Route
            index
            element={
              <Homepage
                guessLimit={guessLimit}
                lowerBound={lowerBound}
                upperBound={upperBound}
                addToTotalGuessesForWins={addToTotalGuessesForWins}
                incrementTotalWins={incrementTotalWins}
              />
            }
          />
          <Route
            path="settings"
            element={
              <Settings
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

export default App;
