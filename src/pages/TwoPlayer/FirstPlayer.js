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
`;

const StyledButton = styled.button`
  height: 30px;
`;

const InputError = styled.div`
  color: red;
  text-align: center;
`;

export default FirstPlayer;
