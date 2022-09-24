import React from "react";
import "./../../App.css";
import "./patchwork.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";

const PatchworkNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>PATCHWORK NEW GAME</h1>
      </div>
      <div className="content-container">
        <IconSelect icon={"Patchwork"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default PatchworkNewGame;
