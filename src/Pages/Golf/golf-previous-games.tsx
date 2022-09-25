import React from "react";
import "./../../App.css";
import "./golf.css";
import BackButton from "../../Components/back-button";

const GolfPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>GOLF</h1>
      </div>
      <h3>Previous Games</h3>
      <div className="content-container"></div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default GolfPreviousGames;
