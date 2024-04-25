import React from "react";
import Navigation from "../../components/Navigation";
import { useState } from "react";
// import styled from "styled-components";
import FirstPlayer from "./FirstPlayer";
import SecondPlayer from "./SecondPlayer";

const TwoPlayer = () => {
  const [playerOneActive, setFirstPlayerActive] = useState(true);
  const [phrase, setPhrase] = useState();

  const handleSubmitPhrase = (input) => {
    setFirstPlayerActive(false);
    setPhrase(input);
  };

  return (
    <>
      {" "}
      <Navigation page="two-player" />
      {playerOneActive === true ? (
        <FirstPlayer handleSubmitPhrase={handleSubmitPhrase} />
      ) : (
        <SecondPlayer phrase={phrase} />
      )}
    </>
  );
};

export default TwoPlayer;
