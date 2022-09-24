import React from "react";
import "./../../App.css";
import "./hive.css";
import BackButton from "../../Components/back-button";

const HivePreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>HIVE ARCHIVES</h1>
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default HivePreviousGames;
