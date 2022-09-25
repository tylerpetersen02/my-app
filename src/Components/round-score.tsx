import React, { useState, useEffect } from "react";
import "./../App.css";
import "./round-score.css";
import ScoreRoundModal from "./score-round-modal";

type RoundScoreFunction = {
  handleAddRoundScore: (player: string, score: number, round: number) => void;
  round: number;
};

const RoundScore = (props: RoundScoreFunction) => {
  const { handleAddRoundScore, round } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [tylerRoundScore, setTylerRoundScore] = useState<number>(0);
  const [samRoundScore, setSamRoundScore] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<string>("");

  const handleModal = (player: string) => {
    setModal(!modal);
    setCurrentPlayer(player);
  };

  const handleModalScoreChange = (score: number | undefined) => {
    if (score === undefined) return;
    currentPlayer === "Tyler"
      ? setTylerRoundScore(score)
      : setSamRoundScore(score);
    setModal(!modal);
  };

  useEffect(() => {
    if (!currentPlayer) {
      return;
    }
    const score = currentPlayer === "Tyler" ? tylerRoundScore : samRoundScore;
    handleAddRoundScore(currentPlayer, score, round);
  }, [tylerRoundScore, samRoundScore]);

  return (
    <>
      <div className="round-score-container">
        <div className="round-header">ROUND {round}</div>
        <div className="round-scores">
          <div
            onClick={() => handleModal("Tyler")}
            className="round-score-tyler"
          >
            {tylerRoundScore}
          </div>
          <div onClick={() => handleModal("Sam")} className="round-score-sam">
            {samRoundScore}
          </div>
        </div>
      </div>
      {modal && (
        <ScoreRoundModal
          round={round}
          handleModalScoreChange={handleModalScoreChange}
        />
      )}
    </>
  );
};

export default RoundScore;
