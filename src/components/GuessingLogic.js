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

  // Array of letters guessed correctly
  const [correctGuesses, setCorrectGuesses] = useState([]);

  // Win Status
  const [win, setWin] = useState(false);

  // Loss Status
  const [loss, setLoss] = useState(false);

  // Array of every letter in the answer phrase
  const [phraseArr, setPhraseArr] = useState([]);

  // Trigger letter key action via innerText of key div
  const handleClickKey = (e) => {
    handleLetterChosen(e.target.innerText.toLowerCase());
  };

  // Check if answer includes, or does not include letter
  const handleLetterChosen = (letter) => {
    let validGuess = phraseArr.includes(letter);
    if (!validGuess) {
      // decrement remaining guesses
      handleDecrementRemainingGuesses();
    } else {
      // trigger correct guess
      handleCorrectGuess(letter);
    }
  };

  // Trigger a win
  const handleTriggerVictory = () => {
    setWin(true);
  };

  const handleCorrectGuess = (letter) => {
    // Update correct guesses array
    setCorrectGuesses((prevState) => [...prevState, letter]);
  };

  useEffect(() => {
    if (phrase !== undefined) {
      // if phrase is passed as prop, split into array for comparison and display
      setPhraseArr(phrase.toLowerCase().split(""));
    }
  }, [phrase]);

  useEffect(() => {
    // WHen guesses run out, set loss state and allow user to scroll
    if (remainingGuesses === 0) {
      setLoss(true);
      document.body.style.overflow = "scroll";
    }
  }, [remainingGuesses]);

  // Reset State for new game and trigger new GET request for quote
  const handleClickNewGame = () => {
    setLoss(false);
    setWin(false);
    handleResetRemainingGuesses();
    setCorrectGuesses([]);

    // Trigger quote for 1 player mode
    // if 2 Player mode, API is not used, trigger quote will be undefined
    triggerQuote !== undefined && triggerQuote();

    // Set to Player 1 turn for 2 player mode
    // If 1 player mode, handleTriggerPlayerOneTurn will be undefined
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
      {!loss && !win && <Keyboard handleClickKey={handleClickKey} />}
      {(win || loss) && <AuthorName>{author || null}</AuthorName>}
      {win && (
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
        <HiddenButton onClick={(e) => handleClickNewGame(e)}>
          {win || loss ? "play again" : "give up"}
        </HiddenButton>
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

const HiddenButton = styled.div`
  display: none;
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
