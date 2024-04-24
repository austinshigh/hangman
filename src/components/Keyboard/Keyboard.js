import React from "react";
import styled from "styled-components";
import Key from "./Key";

const Keyboard = (props) => {
  const rowOne = ["Q", "W", "E", "R", "T", "Y"];
  const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rowThree = ["Z", "X", "C", "V", "B", "N", "M"];

  const renderKeys = (arr) => {
    return arr.map((letter, i) => {
      return (
        <Key key={i} handleClickKey={props.handleClickKey}>
          {letter}
        </Key>
      );
    });
  };

  return (
    <div>
      <Row>{renderKeys(rowOne)}</Row>
      <Row>{renderKeys(rowTwo)}</Row>
      <Row>
        <DeleteKey>{"Delete"}</DeleteKey>
        {renderKeys(rowThree)}
        <EnterKey>{"Enter"}</EnterKey>
      </Row>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const WideKey = styled.div`
  text-align: center;
  height: 35px;
  line-height: 35px;
  margin: 5px;
  border: 1px;
  border-color: #333333;
  border-style: solid;
  font-size: 20px;
  border-radius: 5px;
  width: 80px;
  box-shadow: 1px 1px 1px #333333;
  &:hover {
    background-color: rgb(0, 132, 255);
  }
  &:active {
    background-color: rgb(0, 54, 104);
    color: white;
  }
`;

const EnterKey = styled(WideKey)``;

const DeleteKey = styled(WideKey)``;

export default Keyboard;
