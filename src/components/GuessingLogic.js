import React from "react";
import styled from "styled-components";
import Keyboard from "../components/Keyboard/Keyboard";
import HiddenWord from "../components/HiddenWord";
import { useState, useEffect } from "react";

const GuessingLogic = (props) => {
  const { phrase, author, triggerQuote, guessLimit } = props;

  const [remainingGuesses, setRemainingGuesses] = useState(guessLimit || 5);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [victory, setVictory] = useState(false);
  const [loss, setLoss] = useState(false);

  const [phraseArr, setPhraseArr] = useState([]);

  const handleClickKey = (e) => {
    handleLetterChosen(e.target.innerText.toLowerCase());
  };

  const handleLetterChosen = (letter) => {
    let validGuess = phraseArr.includes(letter);
    if (!validGuess) {
      handleInvalidGuess(letter);
    } else {
      handleCorrectGuess(letter);
    }
  };

  const handleTriggerVictory = () => {
    setVictory(true);
  };

  const handleInvalidGuess = (letter) => {
    setIncorrectGuesses((prevState) => [...prevState, letter]);
    setRemainingGuesses((prevState) => prevState - 1);
  };

  const handleCorrectGuess = (letter) => {
    setCorrectGuesses((prevState) => [...prevState, letter]);
  };

  useEffect(() => {
    if (phrase !== undefined) {
      setPhraseArr(phrase.toLowerCase().split(""));
    }
  }, [phrase]);

  useEffect(() => {
    if (remainingGuesses === 0) {
      setLoss(true);
    }
  }, [remainingGuesses]);

  const handleClickNewGame = (e) => {
    e.preventDefault();
    setLoss(false);
    setVictory(false);
    setRemainingGuesses(guessLimit || 5);
    setIncorrectGuesses([]);
    setCorrectGuesses([]);
    triggerQuote !== undefined && triggerQuote();
  };
  return (
    <div>
      <HiddenWordContainer>
        <HiddenWord
          quote={phrase}
          correctGuesses={correctGuesses}
          handleTriggerVictory={handleTriggerVictory}
        />
      </HiddenWordContainer>
      {!loss && !victory && (
        <Keyboard
          handleClickKey={handleClickKey}
          disabledLetters={[...incorrectGuesses, ...correctGuesses]}
        />
      )}
      {victory && (
        <VictoryContainer>
          <AuthorName>{author || null}</AuthorName>
          <Win>you win!</Win>
        </VictoryContainer>
      )}
      {loss && <Lose>you lose.</Lose>}
      {victory || (loss && <div>that correct answer was {phrase}</div>)}
      {!victory && !loss && (
        <>
          <RemainingGuesses>
            you have {remainingGuesses} remaining guesses
          </RemainingGuesses>
        </>
      )}
      <ButtonContainer>
        <StyledButton onClick={(e) => handleClickNewGame(e)}>
          {victory || loss ? "play again" : "give up"}
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

const HiddenWordContainer = styled.div`
  margin-bottom: 30px;
`;

const Win = styled.div`
  color: blue;
  font-size: 25px;
`;

const Lose = styled.div`
  color: red;
  font-size: 25px;
`;

const RemainingGuesses = styled.div`
  color: #333;
  margin: 20px 0px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const AuthorName = styled.div`
  font-size: 30px;
`;

const VictoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

export default GuessingLogic;
