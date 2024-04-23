import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Homepage = (props) => {
  const [guess, setGuess] = useState(null);
  const [remainingGuesses, setRemainingGuesses] = useState(
    props.guessLimit || 5
  );
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [hint, setHint] = useState(null);
  const [victory, setVictory] = useState(false);
  const [loss, setLoss] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const generateRandomNumber = () => {
    let max = props.upperBound;
    let min = props.lowerBound;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const handleClickNewGame = (e) => {
    e.preventDefault();
    setGuess(null);
    setRemainingGuesses(props.guessLimit);
    setHint(null);
    setVictory(false);
    setLoss(false);
    setGameOver(false);
    setRandomNumber(generateRandomNumber());
  };

  const handleClickGuess = (e) => {
    e.preventDefault();
    setTotalGuesses(totalGuesses + 1);
    if (!loss && !victory) {
      const currentGuess = Number.parseInt(guess);
      if (randomNumber > currentGuess) {
        setHint("too low");
      } else if (randomNumber < currentGuess) {
        setHint("too high");
      } else if (randomNumber === currentGuess) {
        props.incrementTotalWins();
        props.addToTotalGuessesForWins(totalGuesses);
        setHint(null);
        setVictory(true);
        setGameOver(true);
        setTotalGuesses(0);
      }
      if (remainingGuesses === 1) {
        setLoss(true);
        setHint(null);
        setGameOver(true);
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
    <HomepageContainer>
      <h3>homepage</h3>
      <div>
        a random number between {props.lowerBound} and {props.upperBound} has
        been generated
      </div>
      <div>think you can guess the answer?</div>
      {victory && <Win>you win!</Win>}
      {loss && <Lose>you lose.</Lose>}
      {victory || (loss && <div>that correct answer was {randomNumber}</div>)}
      {!gameOver && (
        <>
          <InputContainer>
            <StyledInput
              onChange={(e) => setGuess(e.target.value)}
              ß
              onKeyDown={(e) => handleEnterKeyPress(e)}
            ></StyledInput>
            <StyledButton onClick={(e) => handleClickGuess(e)}>
              submit guess
            </StyledButton>
          </InputContainer>
          {hint !== null && <Hint>your guess was {hint}</Hint>}
          <RemainingGuesses>
            you have {remainingGuesses} remaining guesses
          </RemainingGuesses>
        </>
      )}
      <ButtonContainer>
        <StyledButton onClick={(e) => handleClickNewGame(e)}>
          new game
        </StyledButton>
      </ButtonContainer>
    </HomepageContainer>
  );
};

const Win = styled.div`
  color: blue;
  font-size: 25px;
`;

const Lose = styled.div`
  color: red;
  font-size: 25px;
`;

const HomepageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const RemainingGuesses = styled.div`
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledInput = styled.input`
  border-radius: 10px;
  height: 30px;
  width: 50px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  ${
    "" /* @media (max-width: 600px) {
    flex-direction: column;
  } */
  }
`;

export const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

const Hint = styled.div``;

export default Homepage;
