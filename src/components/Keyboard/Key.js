import React from "react";
import styled from "styled-components";

const Key = (props) => {
  return (
    <StyledKey
      className={props.disabled && "disabled"}
      onClick={(e) => props.handleClickKey(e)}
    >
      {props.children}
    </StyledKey>
  );
};

const StyledKey = styled.div`
  text-align: center;
  width: 35px;
  height: 35px;
  margin: 5px;
  border: 1px;
  border-color: #333333;
  border-style: solid;
  font-size: 28px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #333333;
  &:hover {
    background-color: rgb(0, 132, 255);
  }
  &:active {
    background-color: rgb(0, 54, 104);
    color: white;
  }
  &.disabled {
    pointer-events: none;
    background-color: #333;
  }
  @media (max-width: 375px) {
    height: 35px;
    width: 23px;
    font-size: 20px;
    line-height: 35px;
  }
`;

export default Key;
