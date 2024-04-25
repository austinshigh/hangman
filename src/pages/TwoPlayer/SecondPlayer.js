import React from "react";
import styled from "styled-components";
import GuessingLogic from "../../components/GuessingLogic";
import { useState } from "react";
import { NavButton } from "../../components/Navigation";
import { StyledLink } from "../../components/Navigation";

const SecondPlayer = (props) => {
  const { phrase, handleTriggerPlayerOneTurn } = props;

  const [remainingGuesses, setRemainingGuesses] = useState(6);

  const handleDecrementRemainingGuesses = () => {
    setRemainingGuesses((prevState) => prevState - 1);
  };

  const handleResetRemainingGuesses = () => {
    setRemainingGuesses(6);
  };

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

const SecondPlayerContainer = styled.div``;

export default SecondPlayer;
