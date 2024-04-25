import React from "react";
import styled from "styled-components";
import Keyboard from "../components/Keyboard/Keyboard";
import HiddenWord from "../components/HiddenWord";
import { useState, useEffect } from "react";
import { NavButton } from "../components/Navigation";
import { StyledLink } from "../components/Navigation";

const GuessingLogic = (props) => {
  const {
    phrase,
    author,
    triggerQuote,
    handleTriggerPlayerOneTurn,
    remainingGuesses,
    handleDecrementRemainingGuesses,
    handleResetRemainingGuesses,
  } = props;

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
    handleDecrementRemainingGuesses();
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
      document.body.style.overflow = "scroll";
    }
  }, [remainingGuesses]);

  const handleClickNewGame = () => {
    setLoss(false);
    setVictory(false);
    handleResetRemainingGuesses();
    setIncorrectGuesses([]);
    setCorrectGuesses([]);
    triggerQuote !== undefined && triggerQuote();
    handleTriggerPlayerOneTurn !== undefined && handleTriggerPlayerOneTurn();
  };
  return (
    <div>
      <HiddenWordContainer>
        <HiddenWord
          quote={phrase}
          correctGuesses={correctGuesses}
          handleTriggerVictory={handleTriggerVictory}
          remainingGuesses={remainingGuesses}
          loss={loss}
        />
      </HiddenWordContainer>
      {!loss && !victory && (
        <Keyboard
          handleClickKey={handleClickKey}
          disabledLetters={[...incorrectGuesses, ...correctGuesses]}
        />
      )}
      {victory || (loss && <AuthorName>{author || null}</AuthorName>)}
      {victory && (
        <VictoryContainer>
          <Win>you win!</Win>
        </VictoryContainer>
      )}
      {loss && (
        <VictoryContainer>
          <Lose>you lose</Lose>
        </VictoryContainer>
      )}
      <ButtonContainer>
        <StyledButton onClick={(e) => handleClickNewGame(e)}>
          {victory || loss ? "play again" : "give up"}
        </StyledButton>
        <NavButton>
          <StyledLink to="/">go home</StyledLink>
        </NavButton>
      </ButtonContainer>
    </div>
  );
};

const HiddenWordContainer = styled.div`
  margin-bottom: 30px;
`;

const Win = styled.div`
  color: #6bcaff;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Lose = styled.div`
  color: #ff6b6b;
  font-size: 50px;
  margin: 20px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const AuthorName = styled.div`
  font-size: 30px;
  text-align: center;
`;

const VictoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  margin: 20px;
  color: #333;
  box-shadow: 1px 1px 1px #333333;
  &:hover {
    background-color: #6bcaff;
    box-shadow: 1px 1px 1px #6bcaff;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
`;

export default GuessingLogic;
