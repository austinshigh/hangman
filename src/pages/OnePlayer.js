import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useQuote from "../hooks/useQuote";
import GuessingLogic from "../components/GuessingLogic";

const OnePlayer = () => {
  // useQuote hook makes API call when regenerate is true
  const [regenerate, setRegenerate] = useState(true);

  // Use Quote API for new quote
  const { quote, author, original, handleRef } = useQuote({
    regenerate: regenerate,
  });

  // Players total remaining guesses
  const [remainingGuesses, setRemainingGuesses] = useState(5);

  // Triggered after a guess
  const handleDecrementRemainingGuesses = () => {
    setRemainingGuesses((prevState) => prevState - 1);
  };

  // Triggered when a new game starts
  const handleResetRemainingGuesses = () => {
    setRemainingGuesses(5);
  };

  const triggerNewQuote = () => {
    // When regenerate is true and ref.current is false, API request is made
    // handleRef sets ref.current to false
    setRegenerate(true);
    handleRef();
  };

  useEffect(() => {
    // set regenerate to false to stop repeated API requests
    // Scroll to 200px below top of screen to setup UFO image which shows on loss.
    setRegenerate(false);
    window.scrollTo({
      top: 200,
      behavior: "instant",
    });
    document.body.style.overflow = "hidden";
  }, [quote]);

  return (
    <>
      <OnePlayerContainer>
        <GuessingLogic
          originalPhrase={original}
          phrase={quote}
          author={author}
          triggerQuote={() => triggerNewQuote()}
          remainingGuesses={remainingGuesses}
          handleDecrementRemainingGuesses={handleDecrementRemainingGuesses}
          handleResetRemainingGuesses={handleResetRemainingGuesses}
        />
      </OnePlayerContainer>
    </>
  );
};

const OnePlayerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  /* Add margin to offset UFO image which shows on loss */
  margin-bottom: calc(100vh + 150px);
`;

export default OnePlayer;
