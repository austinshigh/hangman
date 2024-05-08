import React from "react";
import styled from "styled-components";
import GuessingLogic from "../../components/GuessingLogic";
import { useState, useEffect } from "react";

const SecondPlayer = (props) => {
  const { phrase, handleTriggerPlayerOneTurn } = props;

  const [remainingGuesses, setRemainingGuesses] = useState(5);

  // Triggered after a guess
  const handleDecrementRemainingGuesses = () => {
    setRemainingGuesses((prevState) => prevState - 1);
  };

  // Triggered when starting a new game
  const handleResetRemainingGuesses = () => {
    setRemainingGuesses(5);
  };

  useEffect(() => {
    // Scroll to 200 pixels below top of page when opened
    // User will be allowed to scroll up (to see the UFO) once they have lost the game
    window.scrollTo({
      top: 200,
      behavior: "instant",
    });
    document.body.style.overflow = "hidden";
  }, [phrase]);

  return (
    <>
      <SecondPlayerContainer>
        <GuessingLogic
          phrase={phrase}
          author={""}
          handleTriggerPlayerOneTurn={handleTriggerPlayerOneTurn}
          remainingGuesses={remainingGuesses}
          handleDecrementRemainingGuesses={handleDecrementRemainingGuesses}
          handleResetRemainingGuesses={handleResetRemainingGuesses}
          originalPhrase={phrase}
        />
      </SecondPlayerContainer>
    </>
  );
};

const SecondPlayerContainer = styled.div`
  /* Add margin to offset UFO image which shows on loss */
  margin-bottom: calc(100vh + 150px);
`;

export default SecondPlayer;
