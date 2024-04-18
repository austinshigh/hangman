import React, { useEffect } from "react";
import { useState } from "react";

const Homepage = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState(0);
  const [remainingGuesses, setRemainingGuesses] = useState(5);

  const generateRandomNumber = () => {
    let max = 100;
    return Math.floor(Math.random() * max);
  };

  const handleClickGenerate = (e) => {
    e.preventDefault();
    setRandomNumber(generateRandomNumber());
  };

  const handleClickGuess = (e) => {
    e.preventDefault();
    if (randomNumber === Number.parseInt(guess)) {
      alert("u win");
    } else {
      setRemainingGuesses(remainingGuesses - 1);
    }
  };

  useEffect(() => {
    randomNumber === null && setRandomNumber(generateRandomNumber());
  }, [setRandomNumber, randomNumber]);
  return (
    <>
      {randomNumber !== null && (
        <>
          <div>Guess the number {randomNumber}</div>
          <div>Guess the number {remainingGuesses}</div>
          <input onChange={(e) => setGuess(e.target.value)}></input>
          <button onClick={(e) => handleClickGuess(e)}>Submit Guess</button>
          <button onClick={(e) => handleClickGenerate(e)}>New Number</button>
        </>
      )}
    </>
  );
};

export default Homepage;
