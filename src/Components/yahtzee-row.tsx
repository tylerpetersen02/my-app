import React, { useState, useEffect } from "react";
import "./../App.css";
import "./yahtzee-row.css";
import { BsCheckLg } from "react-icons/bs";
import YahtzeeScoreModal from "./yahtzee-score-modal";

type GameType = {
  game: string;
  row: number;
  rowTitle: any;
  rowScoring: any;
  tylerScore: number | boolean;
  samScore: number | boolean;
  handleScoreChange: (
    player: string,
    row: number,
    buttonToggle: boolean,
    value: number
  ) => void;
  updateBonusYahtzee: (
    tylerBonusAmount: number,
    samBonusAmount: number
  ) => void;
};

const YahtzeeRow = (props: GameType) => {
  const {
    game,
    row,
    rowTitle,
    rowScoring,
    tylerScore,
    samScore,
    handleScoreChange,
    updateBonusYahtzee,
  } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [tylerRoundScore, setTylerRoundScore] = useState<number>(0);
  const [samRoundScore, setSamRoundScore] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<string>("");
  const [tylerBonusYahtzee, setTylerBonusYahtzee] = useState<number>(0);
  const [samBonusYahtzee, setSamBonusYahtzee] = useState<number>(0);

  const handleModal = (player: string) => {
    setModal(!modal);
    setCurrentPlayer(player);
  };

  const handleModalScoreChange = (score: number | undefined) => {
    if (score === undefined) return;
    currentPlayer === "Tyler"
      ? setTylerRoundScore(score)
      : setSamRoundScore(score);
    setModal(!modal);
  };

  const handleButtonScoreUpdate = (player: string) => {
    const playerScore = player === "Tyler" ? !tylerScore : !samScore;
    handleScoreChange(player, row, playerScore, 0);
  };

  const handleBonusYahtzee = (player: string) => {
    if (player === "Tyler") {
      if (tylerBonusYahtzee === 3) {
        setTylerBonusYahtzee(0);
      } else {
        setTylerBonusYahtzee(tylerBonusYahtzee + 1);
      }
    } else {
      if (samBonusYahtzee === 3) {
        setSamBonusYahtzee(0);
      } else {
        setSamBonusYahtzee(samBonusYahtzee + 1);
      }
    }
  };

  useEffect(() => {
    const tylerBonusAmount = tylerBonusYahtzee * 100;
    const samBonusAmount = samBonusYahtzee * 100;
    updateBonusYahtzee(tylerBonusAmount, samBonusAmount);
  }, [tylerBonusYahtzee, samBonusYahtzee]);

  useEffect(() => {
    if (!currentPlayer) {
      return;
    }
    const score = currentPlayer === "Tyler" ? tylerRoundScore : samRoundScore;
    handleScoreChange(currentPlayer, row, false, score);
  }, [tylerRoundScore, samRoundScore]);

  return (
    <>
      <div className="yahtzee-row-container">
        <div className="yahtzee-row-title">{rowTitle}</div>
        <div className="yahtzee-row-scoring">{rowScoring}</div>
        <div className="yahtzee-row-player">
          <>
            {rowTitle === "UPPER" && "TYLER"}
            {(row === 9 ||
              row === 13 ||
              row === 14 ||
              row === 15 ||
              row === 16) && (
              <>
                {tylerScore === false && (
                  <button
                    onClick={() => handleButtonScoreUpdate("Tyler")}
                    className="yahtzee-check-button"
                  >
                    <BsCheckLg />
                  </button>
                )}
                {tylerScore && (
                  <button
                    onClick={() => handleButtonScoreUpdate("Tyler")}
                    className="yahtzee-check-button complete"
                  >
                    {tylerScore}
                  </button>
                )}
              </>
            )}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row !== 18 && (
                <div onClick={() => handleModal("Tyler")}>{tylerScore}</div>
              )}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row === 18 && (
                <div
                  onClick={() => handleBonusYahtzee("Tyler")}
                  className="bonus-yahtzee-container"
                >
                  {tylerBonusYahtzee === 0 && (
                    <>
                      <BsCheckLg style={{ opacity: ".2" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                    </>
                  )}
                  {tylerBonusYahtzee === 1 && (
                    <>
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                    </>
                  )}
                  {tylerBonusYahtzee === 2 && (
                    <>
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                    </>
                  )}
                  {tylerBonusYahtzee === 3 && (
                    <>
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ color: "#ffd166" }} />
                    </>
                  )}
                </div>
              )}
          </>
        </div>
        <div className="yahtzee-row-player">
          <>
            {rowTitle === "UPPER" && "SAM"}
            {(row === 9 ||
              row === 13 ||
              row === 14 ||
              row === 15 ||
              row === 16) && (
              <>
                {samScore === false && (
                  <button
                    onClick={() => handleButtonScoreUpdate("Sam")}
                    className="yahtzee-check-button"
                  >
                    <BsCheckLg />
                  </button>
                )}
                {samScore && (
                  <button
                    onClick={() => handleButtonScoreUpdate("Sam")}
                    className="yahtzee-check-button complete"
                  >
                    {samScore}
                  </button>
                )}
              </>
            )}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row !== 18 && (
                <div onClick={() => handleModal("Sam")}>{samScore}</div>
              )}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row === 18 && (
                <div
                  onClick={() => handleBonusYahtzee("Sam")}
                  className="bonus-yahtzee-container"
                >
                  {samBonusYahtzee === 0 && (
                    <>
                      <BsCheckLg style={{ opacity: ".2" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                    </>
                  )}
                  {samBonusYahtzee === 1 && (
                    <>
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                    </>
                  )}
                  {samBonusYahtzee === 2 && (
                    <>
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ opacity: ".2" }} />
                    </>
                  )}
                  {samBonusYahtzee === 3 && (
                    <>
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ color: "#ffd166" }} />
                      <BsCheckLg style={{ color: "#ffd166" }} />
                    </>
                  )}
                </div>
              )}
          </>
        </div>
      </div>
      {modal && (
        <YahtzeeScoreModal
          handleModalScoreChange={handleModalScoreChange}
          title={rowTitle}
        />
      )}
    </>
  );
};

export default YahtzeeRow;
