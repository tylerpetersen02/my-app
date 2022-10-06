import React, { useState } from "react";
import "./yahtzee-score-modal.css";

type ScoreModalProps = {
  handleModalScoreChange: (score: number) => void;
  title: string;
};

const YahtzeeScoreModal = (props: ScoreModalProps) => {
  const { handleModalScoreChange, title } = props;
  const [playerScore, setPlayerScore] = useState<number>(0);

  const handleChangeScore = (e: React.FormEvent<HTMLInputElement>) => {
    setPlayerScore(parseFloat(e.currentTarget.value));
  };
  const closeModal = () => {
    handleModalScoreChange(playerScore);
  };
  return (
    <div className="score-round-modal-container">
      <div className="score-round-modal">
        <span className="modal-title">{title} Score:</span>
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

export default YahtzeeScoreModal;
