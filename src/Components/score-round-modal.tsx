import React, { useState } from "react";
import "./score-round-modal.css";

type ScoreModalProps = {
  handleModalScoreChange: (score: number) => void;
  round: number;
};

const ScoreRoundModal = (props: ScoreModalProps) => {
  const { handleModalScoreChange, round } = props;
  const [playerScore, setPlayerScore] = useState<number>(0);

  const handleChangeScore = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerScore(parseFloat(e.currentTarget.value));
  };
  const closeModal = () => {
    if (!playerScore === undefined) return;
    if (playerScore && playerScore < -2) return;
    handleModalScoreChange(playerScore);
  };
  return (
    <div className="score-round-modal-container">
      <div className="score-round-modal">
        <span className="modal-title">Round {round} Score:</span>
        <input
          className="modal-input-box"
          type="number"
          placeholder="0"
          value={undefined}
          onChange={(e) => handleChangeScore(e)}
        />
        <button className="modal-submit-button" onClick={closeModal}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScoreRoundModal;
