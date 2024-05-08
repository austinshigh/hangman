import React, { useCallback } from "react";
import styled from "styled-components";
import Key from "./Key";

const Keyboard = (props) => {
  const { handleClickKey } = props;
  const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  // render keys for each letter in array
  const renderKeys = useCallback(
    (arr) => {
      return arr.map((letter, i) => {
        return (
          <Key key={i} handleClickKey={handleClickKey}>
            {letter}
          </Key>
        );
      });
    },
    [handleClickKey]
  );

  const firstRowComponents = renderKeys(rowOne);

  const secondRowComponents = renderKeys(rowTwo);

  const thirdRowComponents = renderKeys(rowThree);

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

export default Keyboard;
