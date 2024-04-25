import React from "react";
import styled from "styled-components";
import { useState } from "react";

const FirstPlayer = (props) => {
  const { handleSubmitPhrase, showError } = props;
  const [input, setInput] = useState();

  return (
    <Container>
      <div>enter a phrase for player 2 to guess</div>
      <StyledInput
        placeholder="Max 40 characters"
        onChange={(e) => setInput(e.target.value)}
        maxLength={40}
      ></StyledInput>
      {showError && <InputError>a-z characters only</InputError>}
      <StyledButton onClick={() => handleSubmitPhrase(input)}>
        Ready
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledInput = styled.input`
  height: 25px;
  outline-color: #6bcaff;
`;

const StyledButton = styled.div`
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  text-align: center;
  line-height: 30px;
  &:hover {
    background-color: #6bcaff;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
`;

const InputError = styled.div`
  color: red;
  text-align: center;
`;

export default FirstPlayer;
