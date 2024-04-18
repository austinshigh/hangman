import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
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

  const handleSetLowerBound = (e) => {
    setLowerBound(e.target.value);
  };

  const handleSetUpperBound = (e) => {
    setUpperBound(e.target.value);
  };

  const handleSetGuessLimit = (e) => {
    setGuessLimit(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Homepage
          guessLimit={guessLimit}
          lowerBound={lowerBound}
          upperBound={upperBound}
          addToTotalGuessesForWin={addToTotalGuessesForWins}
          incrementTotalWins={incrementTotalWins}
        />
        {/* <Settings
          handleSetLowerBound={handleSetLowerBound}
          handleSetUpperBound={handleSetUpperBound}
          handleSetGuessLimit={handleSetGuessLimit}
        />
        <Stats wins={totalWins} guesses={totalGuessesForWins} /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
