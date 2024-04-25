import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FirstPlayer from "./FirstPlayer";
import SecondPlayer from "./SecondPlayer";

const TwoPlayer = () => {
  const [playerOneActive, setPlayerOneActive] = useState(true);
  const [phrase, setPhrase] = useState();
  // const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateInput = (input) => {
    let disallowedValues = /[^a-z\s]/gi.test(input);
    if (!disallowedValues) {
      setShowError(false);
      setPhrase(input);
      setPlayerOneActive(false);
    } else {
      setShowError(true);
    }
  };

  const handleTriggerNewGame = () => {
    setPhrase(undefined);
    setPlayerOneActive(true);
  };

  // useEffect(() => {
  //   if (isValid) {
  //     setFirstPlayerActive(false);
  //   }
  // }, [isValid]);

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
            phrase={phrase}
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
