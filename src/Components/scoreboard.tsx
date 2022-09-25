import React, { useState, useEffect } from "react";
import "./../App.css";
import "./scoreboard.css";
import RoundScore from "./round-score";

type GameType = {
  game: String;
};

const Scoreboard = (props: GameType) => {
  const { game } = props;
  const [tylerRoundScores, setTylerRoundScores] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [samRoundScores, setSamRoundScores] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [tylerTotalScore, setTylerTotalScore] = useState<number>(0);
  const [samTotalScore, setSamTotalScore] = useState<number>(0);

  const handleAddRoundScore = (
    player: string,
    score: number,
    round: number
  ) => {
    if (player === "Tyler") {
      const tempArray = [...tylerRoundScores];
      tempArray[round] = score;
      setTylerRoundScores(tempArray);
    } else {
      const tempArray = [...samRoundScores];
      tempArray[round] = score;
      setSamRoundScores(tempArray);
    }
  };

  const handlePlayerTotalScore = (playerScores: number[]) => {
    return playerScores.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  useEffect(() => {
    setTylerTotalScore(handlePlayerTotalScore(tylerRoundScores));
    setSamTotalScore(handlePlayerTotalScore(samRoundScores));
  }, [tylerRoundScores, samRoundScores]);

  return (
    <div className="scoreboard-container">
      <div className="scoreboard-names">
        <span>TYLER</span> <span>SAM</span>
      </div>
      <RoundScore round={1} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={2} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={3} handleAddRoundScore={handleAddRoundScore} />
      {game === "golf" && (
        <>
          <RoundScore round={4} handleAddRoundScore={handleAddRoundScore} />
          <RoundScore round={5} handleAddRoundScore={handleAddRoundScore} />
          <RoundScore round={6} handleAddRoundScore={handleAddRoundScore} />
          <RoundScore round={7} handleAddRoundScore={handleAddRoundScore} />
          <RoundScore round={8} handleAddRoundScore={handleAddRoundScore} />
          <RoundScore round={9} handleAddRoundScore={handleAddRoundScore} />
        </>
      )}
      <div className="score-total">
        <div className="total-score-tyler">{tylerTotalScore}</div>
        <div className="total-score-sam">{samTotalScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
