import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useQuote from "../hooks/useQuote";
import Navigation from "../components/Navigation";
import GuessingLogic from "../components/GuessingLogic";

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
      <Navigation page="one-player" />
      {/* {quote} */}
      <OnePlayerContainer>
        {/* <div>can you guess the famous quote?</div> */}
        <GuessingLogic
          phrase={quote}
          author={author}
          triggerQuote={() => setRegenerate(true)}
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
`;

export default OnePlayer;
