import React from "react";
import Navigation from "../components/Navigation";
import YourHome from "../images/YourHome.svg";
import styled from "styled-components";

const Homepage = () => {
  return (
    <>
      <Navigation page="home" />
      <Water />
      <HomeContainer>
        <img alt="home" src={YourHome} />
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  width: 250px;
  position: absolute;
  bottom: 24.5vh;
  img {
    width: 250px;
  }
`;

const Water = styled.div`
  bottom: 0;
  position: absolute;
  height: 28vh;
  background-color: #55c2ff;
  width: 100vw;
`;

export default Homepage;
