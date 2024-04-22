import React, { useState } from "react";

const Settings = (props) => {
  const [lowerBound, setLowerBound] = useState(null);
  const [upperBound, setUpperBound] = useState(null);
  const [guessLimit, setGuessLimit] = useState(null);

  // const handleLowerBoundInput = (e) => {
  //     setLowerBound(e.target.value);
  // }
  return (
    <>
      <h3>Settings</h3>
      <div className="button_group">
        <input onChange={(e) => setLowerBound(e.target.value)}></input>
        <button onClick={() => props.handleSetLowerBound(lowerBound)}>
          Set Lower Bound
        </button>
      </div>
      <div className="button_group">
        <input onChange={(e) => setUpperBound(e.target.value)}></input>
        <button onClick={() => props.handleSetUpperBound(upperBound)}>
          Set Upper Bound
        </button>
      </div>
      <div className="button_group">
        <input onChange={(e) => setGuessLimit(e.target.value)}></input>
        <button onClick={() => props.handleSetGuessLimit(guessLimit)}>
          Set Guess Limit
        </button>
      </div>
    </>
  );
};

// handleSetLowerBound={handleSetLowerBound}
// handleSetUpperBound={handleSetUpperBound}
// handleSetGuessLimit={handleSetGuessLimit}

export default Settings;
