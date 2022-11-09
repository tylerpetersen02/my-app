import React from "react";
import "./yahtzee-score-modal-top.css";

type ScoreModalProps = {
  handleModalScoreChange: (score: number, zeroOut: boolean) => void;
  title: string;
  currentPlayer: string;
  currentScore: number | boolean;
  row: number;
};

const YahtzeeScoreModal = (props: ScoreModalProps) => {
  const { handleModalScoreChange, title, currentPlayer, currentScore, row } =
    props;
  const dieValue = row - 1;

  const setValues = (amount: number) => {
    return amount * dieValue;
  };

  const closeModal = (zeroOut: boolean, dieAmount: number) => {
    if (zeroOut) {
      handleModalScoreChange(0, zeroOut);
      return;
    }

    if (dieAmount * dieValue !== currentScore) {
      handleModalScoreChange(dieAmount * dieValue, zeroOut);
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
        <div className="modal-input-box">{currentScore.toString()}</div>
        <div className="modal-dice-amounts-container">
          <div
            onClick={() => closeModal(true, 0)}
            className="modal-dice-amount zero"
          >
            0
          </div>
          <div
            onClick={() => closeModal(false, 1)}
            className="modal-dice-amount"
          >
            {setValues(1)}
          </div>
          <div
            onClick={() => closeModal(false, 2)}
            className="modal-dice-amount"
          >
            {setValues(2)}
          </div>
        </div>
        <div className="modal-dice-amounts-container">
          <div
            onClick={() => closeModal(false, 3)}
            className="modal-dice-amount"
          >
            {setValues(3)}
          </div>
          <div
            onClick={() => closeModal(false, 4)}
            className="modal-dice-amount"
          >
            {setValues(4)}
          </div>
          <div
            onClick={() => closeModal(false, 5)}
            className="modal-dice-amount"
          >
            {setValues(5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YahtzeeScoreModal;
