import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Keyboard from "../components/Keyboard/Keyboard";
import HiddenWord from "../components/HiddenWord";

const Homepage = (props) => {
  const [guess, setGuess] = useState(null);
  const [remainingGuesses, setRemainingGuesses] = useState(
    props.guessLimit || 5
  );
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [victory, setVictory] = useState(false);
  const [loss, setLoss] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // https://api.quotable.io/random?maxLength=40&minLength=0

  const mockJson = {
    author: "Susan B. Anthony",
    authorSlug: "susan-b-anthony",
    content: "Independence is happiness.",
    dateAdded: "2019-03-15",
    dateModified: "2023-04-14",
    length: 26,
    tags: ["Famous Quotes"],
    _id: "soeD1o2PIWwM",
  };

  const generateHint = (quote) => {
    let parsedHint = quote.split("").map((n) => {
      if (n === " ") {
        return " ";
      } else {
        return "_";
      }
    });
    return parsedHint;
  };

  const [hint, setHint] = useState(generateHint(mockJson.content));

  const handleClickKey = (e) => {
    console.log(e.target.innerText);
  };

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
      <div>can you guess the famous quote before time runs out?</div>
      <HiddenWord hint={hint} />
      <Keyboard handleClickKey={handleClickKey} />
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

const StyledHint = styled.div`
  letter-spacing: 10px;
  font-size: 30px;
`;

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
