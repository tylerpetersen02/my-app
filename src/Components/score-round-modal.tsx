import React from "react";
import "./score-round-modal.css";

type ScoreModalProps = {
  handleScoreModal: () => void;
};

const ScoreRoundModal = (props: ScoreModalProps) => {
  const { handleScoreModal } = props;
  const closeModal = () => {
    handleScoreModal();
  };
  return (
    <div className="score-round-modal-container">
      <br></br>
      <button onClick={closeModal}>Submit</button>
    </div>
  );
};

export default ScoreRoundModal;
