import React, { useEffect, useState } from "react";
import "./../../App.css";
import "./golf.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";
import ScoreRoundModal from "../../Components/score-round-modal";

const GolfNewGame = () => {
  const [openScoreModal, setOpenScoreModal] = useState<Boolean>(false);

  const handleScoreModal = () => {
    setOpenScoreModal(!openScoreModal);
  };
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>GOLF NEW GAME</h1>
      </div>
      <div className="content-container">
        <br></br>
        <br></br>
        <br></br>
        <button onClick={() => handleScoreModal()} />
        {openScoreModal && (
          <ScoreRoundModal handleScoreModal={handleScoreModal} />
        )}
        <IconSelect icon={"Golf"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default GolfNewGame;
