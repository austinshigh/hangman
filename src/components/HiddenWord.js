import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const HiddenWord = (props) => {
  const generateHint = (quote, lettersGuessed) => {
    console.log(lettersGuessed);
    let parsedHint = quote.split("").map((letter) => {
      if (letter === " ") {
        return " ";
      } else if (
        lettersGuessed !== undefined &&
        lettersGuessed.includes(letter.toLowerCase())
      ) {
        return letter;
      } else {
        return "_";
      }
    });
    return parsedHint;
  };

  const [hint, setHint] = useState(generateHint(props.quote));

  useEffect(() => {
    // console.log(props.correctGuesses);
    setHint(generateHint(props.quote, props.correctGuesses));
  }, [props.correctGuesses, props.quote]);

  useEffect(() => {
    if (hint.length > 1 && hint.indexOf("_") === -1) {
      props.handleTriggerVictory();
    }
  }, [hint]);

  return (
    <Container>
      <StyledHint>{hint}</StyledHint>
    </Container>
  );
};

const Container = styled.div``;

const StyledHint = styled.div`
  letter-spacing: 10px;
  font-size: 30px;
  text-align: center;
`;

export default HiddenWord;
