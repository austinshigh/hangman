import React from "react";
import styled from "styled-components";
import Key from "./Key";
import { useState } from "react";
import { useEffect } from "react";

const Keyboard = (props) => {
  const { disabledLetters, handleClickKey } = props;
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  const renderKeys = (arr, disabledKeys) => {
    return arr.map((letter, i) => {
      if (
        disabledKeys !== undefined &&
        disabledKeys.includes(letter.toLowerCase())
      ) {
        return (
          <Key key={i} handleClickKey={handleClickKey} disabled={true}>
            {letter}
          </Key>
        );
      } else {
        return (
          <Key key={i} handleClickKey={handleClickKey}>
            {letter}
          </Key>
        );
      }
    });
  };

  const [firstRowComponents, setFirstRowComponents] = useState(
    renderKeys(rowOne)
  );

  const [secondRowComponents, setSecondRowComponents] = useState(
    renderKeys(rowTwo)
  );

  const [thirdRowComponents, setThirdRowComponents] = useState(
    renderKeys(rowThree)
  );

  // TODO handle disabling keys
  useEffect(() => {
    setFirstRowComponents(renderKeys(rowOne, disabledLetters));
    setSecondRowComponents(renderKeys(rowTwo, disabledLetters));
    setThirdRowComponents(renderKeys(rowThree, disabledLetters));
  }, [disabledLetters]);

  return (
    <Container>
      <Row>{firstRowComponents}</Row>
      <Row>{secondRowComponents}</Row>
      <Row>{thirdRowComponents}</Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    gap: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

// const WideKey = styled.div`
//   text-align: center;
//   height: 35px;
//   line-height: 35px;
//   margin: 5px;
//   border: 1px;
//   border-color: #333333;
//   border-style: solid;
//   font-size: 20px;
//   border-radius: 5px;
//   width: 80px;
//   box-shadow: 1px 1px 1px #333333;
//   &:hover {
//     background-color: rgb(0, 132, 255);
//   }
//   &:active {
//     background-color: rgb(0, 54, 104);
//     color: white;
//   }
// `;

export default Keyboard;
