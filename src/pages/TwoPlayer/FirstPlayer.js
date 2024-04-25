import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavButton } from "../../components/Navigation";
import { StyledLink } from "../../components/Navigation";

const FirstPlayer = (props) => {
  const { handleSubmitPhrase, showError } = props;
  const [input, setInput] = useState();

  return (
    <Container>
      <div>enter a phrase for player 2 to guess</div>
      <StyledInput
        placeholder="max 40 characters"
        onChange={(e) => setInput(e.target.value)}
        maxLength={40}
      ></StyledInput>
      {showError && <InputError>a-z characters only</InputError>}
      <StyledButton onClick={() => handleSubmitPhrase(input)}>
        ready
      </StyledButton>
      <NavButton>
        <StyledLinkWide to="/">go home</StyledLinkWide>
      </NavButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #333;
  margin-top: 20vh;
`;

const StyledInput = styled.input`
  height: 25px;
  outline-color: #6bcaff;
  text-align: center;
`;

const StyledButton = styled.div`
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  text-align: center;
  line-height: 30px;
  color: #333;
  box-shadow: 1px 1px 1px #333333;
  &:hover {
    background-color: #6bcaff;
    box-shadow: 1px 1px 1px #6bcaff;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
`;

const InputError = styled.div`
  color: red;
  text-align: center;
`;

const StyledLinkWide = styled(StyledLink)`
  padding: 0em 5em;
  margin: 0em -5em;
`;

export default FirstPlayer;
