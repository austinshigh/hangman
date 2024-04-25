import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import one from "../images/one.svg";
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import five from "../images/five.svg";
import six from "../images/six.svg";

const HiddenWord = (props) => {
  const { quote, correctGuesses, handleTriggerVictory } = props;
  const [remainingLetters, setRemainingLetters] = useState(null);

  const generateHint = (quote, lettersGuessed) => {
    let letterCount = 0;
    let parsedHint = quote.split("").map((letter) => {
      if (letter === " ") {
        return " ";
      } else if (
        lettersGuessed !== undefined &&
        lettersGuessed.includes(letter.toLowerCase())
      ) {
        return letter;
      } else {
        letterCount++;
        return "_";
      }
    });
    setRemainingLetters(letterCount);
    return parsedHint;
  };

  const [hint, setHint] = useState(null);

  useEffect(() => {
    if (quote !== undefined && quote.length > 0) {
      // generate new hint with quote and array of correct guesses
      let tempHint = generateHint(quote, correctGuesses);
      setHint(tempHint);
    }
  }, [correctGuesses, quote]);

  useEffect(() => {
    if (remainingLetters !== null && remainingLetters === 0) {
      handleTriggerVictory();
      setRemainingLetters(null);
    }
  }, [remainingLetters, handleTriggerVictory]);

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={four} />
        {/* <StyledImageLoss src={six} /> */}
      </ImageContainer>
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

const StyledImage = styled.img`
  height: 20px;
  width: 20px;
  display: block;
`;

// const StyledImageLoss = styled.img`
//   height: 200px;
//   width: 200px;
//   display: block;
// `;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default HiddenWord;
