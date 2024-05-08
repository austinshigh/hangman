import React from "react";
import styled from "styled-components";

const Key = (props) => {
  return (
    <StyledKey onClick={(e) => props.handleClickKey(e)}>
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
    background-color: #6bcaff;
    color: white;
    border: 1px solid white;
    box-shadow: 1px 1px 1px #6bcaff;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    height: 35px;
    width: 30px;
    font-size: 20px;
    line-height: 35px;
  }
  @media (max-width: 450px) {
    height: 35px;
    width: 27px;
    font-size: 20px;
    line-height: 35px;
  }
  @media (max-width: 415px) {
    height: 35px;
    width: 23px;
    font-size: 20px;
    line-height: 35px;
  }
  @media (max-width: 375px) {
    height: 30px;
    width: 20px;
    font-size: 18px;
    line-height: 30px;
  }
`;

export default Key;
