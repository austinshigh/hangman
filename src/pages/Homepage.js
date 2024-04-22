import React from "react";
import { useState } from "react";

const Homepage = (props) => {
  const [guess, setGuess] = useState(null);
  const [remainingGuesses, setRemainingGuesses] = useState(
    props.guessLimit || 5
  );
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [hint, setHint] = useState(null);
  const [victory, setVictory] = useState(false);
  const [loss, setLoss] = useState(false);

  const generateRandomNumber = () => {
    let max = props.upperBound || 100;
    let min = props.lowerBound || 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const handleClickNewGame = (e) => {
    e.preventDefault();
    setGuess(null);
    setRemainingGuesses(props.guessLimit || 5);
    setHint(null);
    setVictory(false);
    setLoss(false);
    setRandomNumber(generateRandomNumber());
  };

  const handleClickGuess = (e) => {
    e.preventDefault();
    setTotalGuesses(totalGuesses + 1);
    if (!loss && !victory) {
      const currentGuess = Number.parseInt(guess);
      if (randomNumber > currentGuess) {
        setHint("Too Low");
      } else if (randomNumber < currentGuess) {
        setHint("Too High");
      } else if (randomNumber === currentGuess) {
        props.incrementTotalWins();
        props.addToTotalGuessesForWins(totalGuesses);
        setHint(null);
        setVictory(true);
        setTotalGuesses(0);
      }
      if (remainingGuesses === 1) {
        setLoss(true);
        setRemainingGuesses(remainingGuesses - 1);
      } else {
        setRemainingGuesses(remainingGuesses - 1);
      }
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleClickGuess(e);
    }
  };

  return (
    <>
      {randomNumber !== null && (
        <>
          {victory && <div>You Win!</div>}
          {loss && <div>You Lose.</div>}
          {victory || (loss && <div>Correct Answer: {randomNumber}</div>)}
          <div>Remaining Guesses: {remainingGuesses}</div>
          {hint !== null && <div>{hint}</div>}
          <input
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={(e) => handleEnterKeyPress(e)}
          ></input>
          <button onClick={(e) => handleClickGuess(e)}>Submit Guess</button>
          <button onClick={(e) => handleClickNewGame(e)}>New Game</button>
        </>
      )}
    </>
  );
};

export default Homepage;
