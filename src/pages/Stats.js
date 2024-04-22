import React from "react";

const Stats = (props) => {
  return (
    <>
      <div>Stats</div>
      <div>Wins: {props.wins}</div>
      <div>Average Guesses Per Win: {props.guesses / props.wins}</div>
    </>
  );
};

export default Stats;
