import React, { useEffect, useState } from "react";
import "./game-score-total.css";
import { Link } from "react-router-dom";

type GameType = {
  game: String;
  gamePath: String;
}

const GameScoreTotal = (props: GameType) => {
  const { game, gamePath } = props;
  const [tylerTotalGameScore, setTylerTotalGameScore] = useState(0);
  const [samTotalGameScore, setSamTotalGameScore] = useState(0);
  return (
    <>
      <div className="game-score-total-container">
        <div className="game-score-total-both">
          Tyler
          <hr className="hr-scorebox"></hr>
          <span className="total-score">{tylerTotalGameScore}</span>
        </div>
        <div className="game-score-total-both">
          Sam <hr className="hr-scorebox"></hr>
          <span className="total-score">{samTotalGameScore}</span>
        </div>
      </div>
      <Link className="main-button-link" to={`${gamePath}-new-game`}>
        <button className="main-button golf-button">New Game</button>
      </Link>
      <Link className="main-button-link" to={`${gamePath}-previous-games`}>
        <button className="main-button golf-button">Previous Scores</button>
      </Link>
    </>
  );
};

export default GameScoreTotal;
