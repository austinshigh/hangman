import React from "react";
import styled from "styled-components";
import GuessingLogic from "../../components/GuessingLogic";

const SecondPlayer = (props) => {
  const { phrase, handleTriggerPlayerOneTurn } = props;

  return (
    <SecondPlayerContainer>
      <GuessingLogic
        phrase={phrase}
        author={""}
        handleTriggerPlayerOneTurn={handleTriggerPlayerOneTurn}
      />
    </SecondPlayerContainer>
  );
};

const SecondPlayerContainer = styled.div``;

export default SecondPlayer;
