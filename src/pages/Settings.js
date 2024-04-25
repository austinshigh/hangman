import React, { useState } from "react";
import { StyledInput, StyledButton, InputContainer } from "./OnePlayer";
import styled from "styled-components";

const Settings = (props) => {
  const [lowerBound, setLowerBound] = useState(null);
  const [upperBound, setUpperBound] = useState(null);
  const [guessLimit, setGuessLimit] = useState(null);

  return (
    <SettingsContainer>
      <h3>settings</h3>
      <div>
        random numbers generated will range from {props.lower} to {props.upper}{" "}
        (inclusive)
      </div>
      <div>
        players will have {props.guesses} guesses to guess the correct answer
      </div>
      <InputContainer>
        <StyledInput
          onChange={(e) => setLowerBound(e.target.value)}
        ></StyledInput>
        <StyledButton onClick={() => props.handleSetLowerBound(lowerBound)}>
          set new lower bound
        </StyledButton>
      </InputContainer>
      <InputContainer>
        <StyledInput
          onChange={(e) => setUpperBound(e.target.value)}
        ></StyledInput>
        <StyledButton onClick={() => props.handleSetUpperBound(upperBound)}>
          set new upper bound
        </StyledButton>
      </InputContainer>
      <InputContainer>
        <StyledInput
          onChange={(e) => setGuessLimit(e.target.value)}
        ></StyledInput>
        <StyledButton onClick={() => props.handleSetGuessLimit(guessLimit)}>
          set new guess limit
        </StyledButton>
      </InputContainer>
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  div {
    padding: 0px 20px;
  }
`;

export default Settings;
