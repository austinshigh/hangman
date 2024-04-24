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

  return <StyledHint>{hint}</StyledHint>;
};

const StyledHint = styled.div`
  letter-spacing: 10px;
  font-size: 30px;
`;

export default HiddenWord;
