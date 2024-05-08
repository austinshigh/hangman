import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FirstPlayer from "./FirstPlayer";
import SecondPlayer from "./SecondPlayer";

const TwoPlayer = () => {
  const [playerOneActive, setPlayerOneActive] = useState(true);

  // Correct Answer
  const [correctAnswer, setCorrectAnswer] = useState();

  // True when validation fails
  const [showError, setShowError] = useState(false);

  const validateInput = (input) => {
    // Allow only a-z and spaces
    let disallowedValues = /[^a-z\s]/gi.test(input);
    if (!disallowedValues) {
      // if contains other values, error
      setShowError(false);
      setCorrectAnswer(input);
      setPlayerOneActive(false);
    } else {
      setShowError(true);
    }
  };

  const handleTriggerNewGame = () => {
    // reset state to default values for new game
    setCorrectAnswer(undefined);
    setPlayerOneActive(true);
  };

  return (
    <>
      <TwoPlayerContainer>
        {playerOneActive === true ? (
          <FirstPlayer
            handleSubmitPhrase={validateInput}
            showError={showError}
          />
        ) : (
          <SecondPlayer
            phrase={correctAnswer}
            handleTriggerPlayerOneTurn={handleTriggerNewGame}
          />
        )}
      </TwoPlayerContainer>
    </>
  );
};

const TwoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TwoPlayer;
