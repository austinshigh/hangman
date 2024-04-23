import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <>
      <Container>
        <NavButton>
          <StyledLink to="/">play</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/settings">settings</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/stats">statistics</StyledLink>
        </NavButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 30px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const NavButton = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  &:hover {
    background-color: #333;
  }
  &:active {
    background-color: ;
  }
`;

export default Navigation;
