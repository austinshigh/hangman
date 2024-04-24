import React from "react";
import styled from "styled-components";
// import { useState } from "react";

const HiddenWord = (props) => {
  return <StyledHint>{props.hint}</StyledHint>;
};

const StyledHint = styled.div`
  letter-spacing: 10px;
  font-size: 30px;
`;

export default HiddenWord;
