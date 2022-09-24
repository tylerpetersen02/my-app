import React from "react";
import "./../../App.css";
import "./golf.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";

const GolfPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>GOLF ARCHIVES</h1>
      </div>
      <div className="content-container">
        <IconSelect icon={"Golf"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default GolfPreviousGames;
