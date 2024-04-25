import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useQuote from "../hooks/useQuote";
import GuessingLogic from "../components/GuessingLogic";

const OnePlayer = (props) => {
  const [regenerate, setRegenerate] = useState(true);

  const { quote, author, original, handleRef } = useQuote({
    regenerate: regenerate,
  });

  const [remainingGuesses, setRemainingGuesses] = useState(6);

  const handleDecrementRemainingGuesses = () => {
    setRemainingGuesses((prevState) => prevState - 1);
  };

  const handleResetRemainingGuesses = () => {
    setRemainingGuesses(6);
  };

  const triggerNewQuote = () => {
    setRegenerate(true);
    handleRef();
  };

  useEffect(() => {
    setRegenerate(false);
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
    document.body.style.overflow = "hidden";
  }, [quote]);

  return (
    <>
      {/* {quote} */}
      <OnePlayerContainer>
        {/* <div>can you guess the famous quote?</div> */}
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
  margin-bottom: calc(100vh + 150px);
`;

export default OnePlayer;
