import React from "react";
import styled from "styled-components";

const Stats = (props) => {
  return (
    <>
      <h3>stats</h3>
      <Container>
        {props.wins > 0 ? (
          <div>
            you have won{" "}
            {props.wins > 1 ? `${props.games} games` : "a single game"}
          </div>
        ) : (
          <div>when you win your first game, your record will display here</div>
        )}
        {props.wins !== 0 && (
          <div>
            it has taken you an average of {props.guesses / props.wins} guesses
            to win each game
          </div>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  div {
    padding: 0px 20px;
  }
`;

export default Stats;
