import React, { useState, useEffect } from "react";
import "./../App.css";
import "./previous-dates.css";
import PreviousScores from "./previous-round-scores";

type PreviousGameScores = {
  scoresByDate: any;
  key: number;
};

const PreviousDates = (props: PreviousGameScores) => {
  const { scoresByDate } = props;
  const [dropDown, setDropDown] = useState<boolean>(false);
  const date = new Date(scoresByDate[0].created_timestamp);
  const getDay = date.getDay();
  let day;
  switch (getDay) {
    case 0:
      day = "Mon";
      break;
    case 1:
      day = "Tue";
      break;
    case 2:
      day = "Wed";
      break;
    case 3:
      day = "Thurs";
      break;
    case 4:
      day = "Fri";
      break;
    case 5:
      day = "Sat";
      break;
    case 6:
      day = "Sun";
  }
  const dateMDY = `${day} ${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <div className="previous-scores-container">
      <div
        className="prev-date-container"
        onClick={() => setDropDown(!dropDown)}
      >
        {dateMDY}
      </div>
      {dropDown && (
        <div className="prev-score-title-row">
          <span className="prev-score-title-name">Player</span>
          <span className="prev-score-title-value">1</span>
          <span className="prev-score-title-value">2</span>
          <span className="prev-score-title-value">3</span>
          <span className="prev-score-title-value">4</span>
          <span className="prev-score-title-value">5</span>
          <span className="prev-score-title-value">6</span>
          <span className="prev-score-title-value">7</span>
          <span className="prev-score-title-value">8</span>
          <span className="prev-score-title-value">9</span>
          <span className="prev-score-row-name">Total</span>
        </div>
      )}
      <hr className="prev-game-hr"></hr>
      {scoresByDate.map((scores: string | number, i: number) => (
        <PreviousScores key={i} roundScores={scores} dropDown={dropDown} />
      ))}
    </div>
  );
};

export default PreviousDates;
