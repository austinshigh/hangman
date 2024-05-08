import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import five from "../images/five.svg";
import six from "../images/six.svg";

const HiddenWord = (props) => {
  const {
    quote,
    correctGuesses,
    handleTriggerVictory,
    remainingGuesses,
    loss,
  } = props;
  const [remainingLetters, setRemainingLetters] = useState(null);

  // display hangman images based on remaining number of guesses
  const images = {
    0: six,
    1: five,
    2: four,
    3: three,
    4: two,
  };

  // Returns a hint string containing all of the correct guesses so far,
  // '_' characters are in place of letters that have not yet been guessed
  const generateHint = (quote, lettersGuessed) => {
    let unguessedLetterCount = 0;

    // Builds hint string
    let parsedHint = quote.split("").map((letter) => {
      if (letter === " ") {
        return " ";
      } else if (
        lettersGuessed !== undefined &&
        lettersGuessed.includes(letter.toLowerCase())
      ) {
        return letter;
      } else {
        unguessedLetterCount++;
        return "_";
      }
    });
    setRemainingLetters(unguessedLetterCount);
    return parsedHint;
  };

  const [hint, setHint] = useState(null);

  // Generate a new hint
  // Triggered whhen a new correct letter is guessed, a new quote is generated, or a loss is triggered
  useEffect(() => {
    if (quote !== undefined && quote.length > 0) {
      let tempHint = generateHint(quote, correctGuesses);
      setHint(tempHint);
    }
  }, [correctGuesses, quote, loss]);

  // Triggers a win, when there are no remaining unguessed letters,
  useEffect(() => {
    if (remainingLetters !== null && remainingLetters === 0) {
      handleTriggerVictory();
      setRemainingLetters(null);
    }
  }, [remainingLetters, handleTriggerVictory]);

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={images[remainingGuesses]} />
      </ImageContainer>
      <StyledHint>{loss ? quote : hint}</StyledHint>
    </Container>
  );
};

const Container = styled.div``;

const StyledHint = styled.div`
  letter-spacing: 10px;
  font-size: 30px;
  text-align: center;
  min-height: 106.5px;
  @media (min-width: 1000px) {
    min-height: 35.5px;
  }
`;

const StyledImage = styled.img`
  height: 300px;
  display: block;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default HiddenWord;
