import React from "react";
import "./../../App.css";
import "./blokus.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";

const BlokusPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>BLOKUS ARCHIVES</h1>
      </div>
      <div className="content-container">
        <IconSelect icon={"Blokus"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default BlokusPreviousGames;
