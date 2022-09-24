import React from "react";
import "./../../App.css";
import "./hive.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";

const HiveNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>HIVE NEW GAME</h1>
      </div>
      <div className="content-container">
        <IconSelect icon={"Hive"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default HiveNewGame;
