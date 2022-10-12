import React, { useState } from "react";
import "./yahtzee-score-modal.css";

type ScoreModalProps = {
  handleModalScoreChange: (score: number, zeroOut: boolean) => void;
  title: string;
  currentPlayer: string;
  currentScore: number | boolean;
};

const YahtzeeScoreModal = (props: ScoreModalProps) => {
  const { handleModalScoreChange, title, currentPlayer, currentScore } = props;
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [scoreChange, setScoreChange] = useState<boolean>(false);

  const handleChangeScore = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerScore(parseFloat(e.currentTarget.value));
    setScoreChange(true);
  };
  const closeModal = (zeroOut: boolean) => {
    if (zeroOut) {
      handleModalScoreChange(0, zeroOut);
      return;
    }
    if (playerScore !== currentScore && scoreChange) {
      handleModalScoreChange(playerScore, zeroOut);
    } else {
      if (typeof currentScore === "number")
        handleModalScoreChange(currentScore, zeroOut);
    }
  };
  return (
    <div className="score-round-modal-container">
      <div className="score-round-modal">
        <span className="modal-title">
          {currentPlayer} {title} Score:
        </span>
        <input
          className="modal-input-box"
          type="number"
          placeholder={currentScore.toString()}
          value={undefined}
          onChange={(e) => handleChangeScore(e)}
        />
        <div className="modal-button-container">
          <button
            className="modal-zero-out-button"
            onClick={() => closeModal(true)}
          >
            Zero
          </button>
          <button
            className="modal-submit-button"
            onClick={() => closeModal(false)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default YahtzeeScoreModal;
