import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Keyboard from "../components/Keyboard/Keyboard";
import HiddenWord from "../components/HiddenWord";
import useQuote from "../hooks/useQuote";
import Navigation from "../components/Navigation";

const OnePlayer = (props) => {
  const [remainingGuesses, setRemainingGuesses] = useState(
    props.guessLimit || 5
  );
  const [victory, setVictory] = useState(false);
  const [loss, setLoss] = useState(false);
  const gameOver = false;
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [regenerate, setRegenerate] = useState(true);

  const { quote, author } = useQuote({
    regenerate: regenerate,
    setRegenerate: setRegenerate,
  });

  const [quoteArr, setQuoteArr] = useState([]);

  // https://api.quotable.io/random?maxLength=40&minLength=0

  // const mockJson = {
  //   author: "Susan B. Anthony",
  //   authorSlug: "susan-b-anthony",
  //   content: "Independence is happiness.",
  //   dateAdded: "2019-03-15",
  //   dateModified: "2023-04-14",
  //   length: 26,
  //   tags: ["Famous Quotes"],
  //   _id: "soeD1o2PIWwM",
  // };

  const handleClickKey = (e) => {
    handleLetterChosen(e.target.innerText.toLowerCase());
  };

  const handleLetterChosen = (letter) => {
    let validGuess = quoteArr.includes(letter);
    console.log(validGuess);
    if (!validGuess) {
      handleInvalidGuess(letter);
    } else {
      handleCorrectGuess(letter);
    }
  };

  const handleTriggerVictory = () => {
    setVictory(true);
  };

  const handleInvalidGuess = (letter) => {
    setIncorrectGuesses((prevState) => [...prevState, letter]);
    setRemainingGuesses((prevState) => prevState - 1);
  };

  const handleCorrectGuess = (letter) => {
    setCorrectGuesses((prevState) => [...prevState, letter]);
  };

  useEffect(() => {
    if (quote !== undefined) {
      setQuoteArr(quote.toLowerCase().split(""));
    }
  }, [quote]);

  useEffect(() => {
    if (remainingGuesses === 0) {
      setLoss(true);
    }
  }, [remainingGuesses]);

  const handleClickNewGame = (e) => {
    e.preventDefault();
    setLoss(false);
    setVictory(false);
    setRemainingGuesses(props.guessLimit || 5);
    setIncorrectGuesses([]);
    setCorrectGuesses([]);
    //generate new quote
    setRegenerate(true);
  };

  return (
    <>
      <Navigation page="one-player" />
      {quote}
      <OnePlayerContainer>
        <div>can you guess the famous quote?</div>
        <HiddenWord
          quote={quote}
          correctGuesses={correctGuesses}
          handleTriggerVictory={handleTriggerVictory}
        />
        {!loss && !victory && (
          <Keyboard
            handleClickKey={handleClickKey}
            disabledLetters={[...incorrectGuesses, ...correctGuesses]}
          />
        )}
        {victory && (
          <VictoryContainer>
            <AuthorName> author: {author}</AuthorName>
            <Win>you win!</Win>
          </VictoryContainer>
        )}
        {loss && <Lose>you lose.</Lose>}
        {victory || (loss && <div>that correct answer was {quote}</div>)}
        {!gameOver && (
          <>
            <InputContainer></InputContainer>
            <RemainingGuesses>
              you have {remainingGuesses} remaining guesses
            </RemainingGuesses>
          </>
        )}
        <ButtonContainer>
          <StyledButton onClick={(e) => handleClickNewGame(e)}>
            new game
          </StyledButton>
        </ButtonContainer>
      </OnePlayerContainer>
    </>
  );
};

const Win = styled.div`
  color: blue;
  font-size: 25px;
`;

const Lose = styled.div`
  color: red;
  font-size: 25px;
`;

const OnePlayerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const RemainingGuesses = styled.div`
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const AuthorName = styled.div`
  font-size: 30px;
`;

const VictoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  border-radius: 10px;
  height: 30px;
  width: 50px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  ${
    "" /* @media (max-width: 600px) {
    flex-direction: column;
  } */
  }
`;

export const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

export default OnePlayer;
