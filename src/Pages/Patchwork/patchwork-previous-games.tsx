import React from "react";
import "./../../App.css";
import "./patchwork.css";
import BackButton from "../../Components/back-button";

const PatchworkPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>PATCHWORK ARCHIVES</h1>
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default PatchworkPreviousGames;
