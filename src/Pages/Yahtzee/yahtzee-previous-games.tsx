import React, { useState } from "react";
import "./../../App.css";
import "./yahtzee.css";
import BackButton from "../../Components/back-button";
import { useQuery } from "@apollo/client";
import GET_ALL_SCORES from "../../GraphQL/Queries/all-scores";
import PreviousDates from "../../Components/previous-dates";

const YahtzeePreviousGames = () => {
  let sortedScores: any[] = [];
  let scoresContainer: any[] = [];
  const { data: all_scores, loading: scoresLoading } = useQuery(GET_ALL_SCORES);
  if (all_scores && !scoresLoading) {
    let currentDate: string;

    all_scores.allScores.forEach((item: any, index: number) => {
      const date = new Date(item.created_timestamp);
      const dateMDY = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;

      if (dateMDY !== currentDate) {
        if (currentDate) {
          sortedScores.push(scoresContainer);
        }
        currentDate = dateMDY;
        scoresContainer = [];
        scoresContainer.push(item);
      } else {
        scoresContainer.push(item);
        if (index === all_scores.allScores.length - 1) {
          sortedScores.push(scoresContainer);
        }
      }
    });
  }

  return (
    <div className="App-container">
      <div className="title-container" style={{ marginBottom: "-30px" }}>
        <h1 style={{ fontSize: "2.8em", margin: "5px" }}>YAHTZEE</h1>
      </div>
      <h3 style={{ fontSize: "1.3em", margin: "-10px 0px" }}>Previous Games</h3>
      {all_scores && !scoresLoading && (
        <div className="content-container-scroll">
          {sortedScores.map((scoreArray: any, i: number) => {
            return <PreviousDates key={i} scoresByDate={scoreArray} />;
          })}
        </div>
      )}
      {!all_scores && scoresLoading && (
        <span className="loading-text">Scores Loading! Try again in 30 seconds...</span>
      )}
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default YahtzeePreviousGames;
