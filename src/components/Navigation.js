import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <>
      <h1>hangman</h1>
      <Container>
        {props.page === "home" && (
          <>
            <NavButton>
              <StyledLink to="/one-player">one-player</StyledLink>
            </NavButton>
            <NavButton>
              <StyledLink to="/two-player">two-player</StyledLink>
            </NavButton>
          </>
        )}
        {(props.page === "one-player" || props.page === "two-player") && (
          <NavButton>
            <StyledLink to="/">home</StyledLink>
          </NavButton>
        )}
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
