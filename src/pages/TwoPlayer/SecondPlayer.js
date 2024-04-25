import React from "react";
import styled from "styled-components";
import GuessingLogic from "../../components/GuessingLogic";
import { useState, useEffect } from "react";

const SecondPlayer = (props) => {
  const { phrase, handleTriggerPlayerOneTurn } = props;

  const [remainingGuesses, setRemainingGuesses] = useState(6);

  const handleDecrementRemainingGuesses = () => {
    setRemainingGuesses((prevState) => prevState - 1);
  };

  const handleResetRemainingGuesses = () => {
    setRemainingGuesses(6);
  };

  useEffect(() => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
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
  margin-bottom: calc(100vh + 150px);
`;

export default SecondPlayer;
