import React, { useState, useEffect } from "react";
import "./../App.css";
import "./previous-round-scores.css";

type PreviousGameScores = {
  roundScores: any;
  dropDown: boolean;
  key: number;
};

const PreviousScores = (props: PreviousGameScores) => {
  const { roundScores, dropDown } = props;
  const playerName = roundScores.player_id === 1 ? "Tyler" : "Sam";
  return (
    <>
      {dropDown && (
        <>
          <div className="prev-score-row">
            <span className="prev-score-row-name">{playerName}</span>
            <span className="prev-score-row-value">
              {roundScores.round_one}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_two}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_three}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_four}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_five}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_six}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_seven}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_eight}
            </span>
            <span className="prev-score-row-value">
              {roundScores.round_nine}
            </span>
            <span className="prev-score-row-name">
              {roundScores.total_round_score}
            </span>
          </div>
          {playerName === "Sam" && <hr className="prev-game-hr"></hr>}
        </>
      )}
    </>
  );
};

export default PreviousScores;
