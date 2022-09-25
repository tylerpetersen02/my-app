import React, { useState, useEffect } from "react";
import "./../App.css";
import "./scoreboard.css";
import RoundScore from "./round-score";

const Scoreboard = () => {
  const [tylerRoundScores, setTylerRoundScores] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [samRoundScores, setSamRoundScores] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [tylerTotalGolfScore, setTylerTotalGolfScore] = useState<number>(0);
  const [samTotalGolfScore, setSamTotalGolfScore] = useState<number>(0);

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
    setTylerTotalGolfScore(handlePlayerTotalScore(tylerRoundScores));
    setSamTotalGolfScore(handlePlayerTotalScore(samRoundScores));
  }, [tylerRoundScores, samRoundScores]);

  console.log(tylerRoundScores, samRoundScores);
  return (
    <div className="scoreboard-container">
      <div className="scoreboard-names">
        <span>TYLER</span> <span>SAM</span>
      </div>
      <RoundScore round={1} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={2} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={3} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={4} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={5} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={6} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={7} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={8} handleAddRoundScore={handleAddRoundScore} />
      <RoundScore round={9} handleAddRoundScore={handleAddRoundScore} />
      <div className="score-total">
        <div className="total-score-tyler">{tylerTotalGolfScore}</div>
        <div className="total-score-sam">{samTotalGolfScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
