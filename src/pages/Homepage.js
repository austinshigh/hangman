import React from "react";
import Navigation from "../components/Navigation";
import YourHome from "../images/YourHome.svg";
import styled from "styled-components";

const Homepage = () => {
  return (
    <>
      <Navigation page="home" />
      <Water></Water>
      <HomeContainer>
        <img src={YourHome} />
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  position: absolute;
  height: 100vw;
  bottom: 0;
  img {
    width: 50vw;
    position: absolute;
    bottom: 25vh;
  }
`;

const Water = styled.div`
  bottom: 0;
  position: absolute;
  height: 50vw;
  background-color: #55c2ff;
  width: 100vw;
`;

export default Homepage;
