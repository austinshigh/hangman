import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <>
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

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;

export const NavButton = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  margin: 20px;
  text-align: center;
  box-shadow: 1px 1px 1px #333333;
  &:hover {
    background-color: #6bcaff;
    color: white;
    border: 1px solid white;
    box-shadow: 1px 1px 1px #6bcaff;

    cursor: pointer;
    ${StyledLink} {
      color: white;
    }
  }
  ${
    "" /* &:active {
    background-color: #6bcaff;
    color: white;
    border: 1px solid white;
    ${StyledLink} {
      color: white;
    } */
  }
`;

export default Navigation;
