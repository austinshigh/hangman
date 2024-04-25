import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useQuote from "../hooks/useQuote";
import { Link } from "react-router-dom";
import GuessingLogic from "../components/GuessingLogic";
import { NavButton } from "../components/Navigation";
import { StyledLink } from "../components/Navigation";

const OnePlayer = (props) => {
  const [regenerate, setRegenerate] = useState(true);

  const { quote, author } = useQuote({
    regenerate: regenerate,
  });

  useEffect(() => {
    setRegenerate(false);
  }, [quote]);

  return (
    <>
      {/* {quote} */}
      <OnePlayerContainer>
        {/* <div>can you guess the famous quote?</div> */}
        <GuessingLogic
          phrase={quote}
          author={author}
          triggerQuote={() => setRegenerate(true)}
        />
      </OnePlayerContainer>
      <NavButton>
        <StyledLink to="/">go home</StyledLink>
      </NavButton>
    </>
  );
};

const OnePlayerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default OnePlayer;
