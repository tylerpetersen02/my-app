import React, { useState, useEffect } from "react";
import "./../App.css";
import "./yahtzee-row.css";
import { BsCheckLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import YahtzeeScoreModal from "./yahtzee-score-modal";
import YahtzeeScoreModalTop from "./yahtzee-score-modal-top";

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
    value: number,
    iteration: string
  ) => void;
  updateBonusYahtzee: (
    tylerBonusAmount: number,
    samBonusAmount: number
  ) => void;
};

const YahtzeeRow = (props: GameType) => {
  const {
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
  const [zeroOutBoxTyler, setZeroOutBoxTyler] = useState<boolean>(false);
  const [zeroOutBoxSam, setZeroOutBoxSam] = useState<boolean>(false);
  const nonZeroOutRows = [1, 8, 9, 10, 13, 14, 15, 16, 18, 19, 20];
  const playerScore = currentPlayer === "Tyler" ? tylerScore : samScore;

  const handleModal = (player: string) => {
    setModal(!modal);
    setCurrentPlayer(player);
  };

  const handleModalScoreChange = (
    score: number | undefined,
    zeroOut: boolean
  ) => {
    if (score === undefined) return;

    if (nonZeroOutRows.includes(row)) zeroOut = false;

    if (zeroOut === false) {
      currentPlayer === "Tyler"
        ? setTylerRoundScore(score)
        : setSamRoundScore(score);
    } else {
      currentPlayer === "Tyler" ? setTylerRoundScore(0) : setSamRoundScore(0);
    }
    currentPlayer === "Tyler"
      ? setZeroOutBoxTyler(zeroOut)
      : setZeroOutBoxSam(zeroOut);

    setModal(!modal);
  };

  const handleButtonScoreUpdate = (player: string, current: string) => {
    let iteration;

    if (player === "Tyler") {
      if (current === "incomplete") {
        iteration = "complete";
        setZeroOutBoxTyler(false);
      } else if (current === "complete") {
        iteration = "zero out";
        setZeroOutBoxTyler(true);
      } else {
        iteration = "incomplete";
        setZeroOutBoxTyler(false);
      }
    } else {
      if (current === "incomplete") {
        iteration = "complete";
        setZeroOutBoxSam(false);
      } else if (current === "complete") {
        iteration = "zero out";
        setZeroOutBoxSam(true);
      } else {
        iteration = "incomplete";
        setZeroOutBoxSam(false);
      }
    }
    handleScoreChange(player, row, 0, iteration);
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
    handleScoreChange(currentPlayer, row, score, "");
  }, [tylerRoundScore, samRoundScore]);

  return (
    <>
      <div className="yahtzee-row-container">
        <div className="yahtzee-row-title">{rowTitle}</div>
        <div className="yahtzee-row-scoring">{rowScoring}</div>
        <div className="yahtzee-row-player">
          <>
            {rowTitle === "UPPER" && "TYLER"}
            {row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              zeroOutBoxTyler && (
                <div
                  onClick={() => handleModal("Tyler")}
                  className="yahtzee-check-button zero-out"
                >
                  <GrClose style={{ fontSize: "20px" }} />
                </div>
              )}
            {(row === 9 ||
              row === 13 ||
              row === 14 ||
              row === 15 ||
              row === 16) && (
              <>
                {!zeroOutBoxTyler && (
                  <>
                    {tylerScore === false && (
                      <div
                        onClick={() =>
                          handleButtonScoreUpdate("Tyler", "incomplete")
                        }
                        className="yahtzee-check-button"
                      >
                        <BsCheckLg />
                      </div>
                    )}
                    {tylerScore && (
                      <div
                        onClick={() =>
                          handleButtonScoreUpdate("Tyler", "complete")
                        }
                        className="yahtzee-check-button complete"
                      >
                        {tylerScore}
                      </div>
                    )}
                  </>
                )}
                {zeroOutBoxTyler && (
                  <>
                    {!tylerScore && (
                      <div
                        onClick={() =>
                          handleButtonScoreUpdate("Tyler", "zero out")
                        }
                        className="yahtzee-check-button zero-out"
                      >
                        <GrClose />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {row !== 1 &&
              row !== 8 &&
              row !== 9 &&
              row !== 10 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row !== 18 &&
              row !== 19 &&
              row !== 20 && (
                <>
                  {!zeroOutBoxTyler && tylerScore === 0 && (
                    <div onClick={() => handleModal("Tyler")}>{tylerScore}</div>
                  )}
                  {!zeroOutBoxTyler && tylerScore !== 0 && (
                    <div
                      className="yahtzee-check-button complete"
                      onClick={() => handleModal("Tyler")}
                    >
                      {tylerScore}
                    </div>
                  )}
                </>
              )}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row !== 18 &&
              (row === 8 || row === 10 || row === 19 || row === 20) &&
              !zeroOutBoxTyler && <>{tylerScore}</>}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row === 18 &&
              !zeroOutBoxTyler && (
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
            {row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              zeroOutBoxSam && (
                <div
                  onClick={() => handleModal("Sam")}
                  className="yahtzee-check-button zero-out"
                >
                  <GrClose />
                </div>
              )}
            {(row === 9 ||
              row === 13 ||
              row === 14 ||
              row === 15 ||
              row === 16) && (
              <>
                {!zeroOutBoxSam && (
                  <>
                    {samScore === false && (
                      <div
                        onClick={() =>
                          handleButtonScoreUpdate("Sam", "incomplete")
                        }
                        className="yahtzee-check-button"
                      >
                        <BsCheckLg />
                      </div>
                    )}
                    {samScore && (
                      <div
                        onClick={() =>
                          handleButtonScoreUpdate("Sam", "complete")
                        }
                        className="yahtzee-check-button complete"
                      >
                        {samScore}
                      </div>
                    )}
                  </>
                )}
                {zeroOutBoxSam && (
                  <>
                    {!samScore && (
                      <div
                        onClick={() =>
                          handleButtonScoreUpdate("Sam", "zero out")
                        }
                        className="yahtzee-check-button zero-out"
                      >
                        <GrClose />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {row !== 1 &&
              row !== 8 &&
              row !== 9 &&
              row !== 10 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row !== 18 &&
              row !== 19 &&
              row !== 20 && (
                <>
                  {!zeroOutBoxSam && samScore === 0 && (
                    <div onClick={() => handleModal("Sam")}>{samScore}</div>
                  )}
                  {!zeroOutBoxSam && samScore !== 0 && (
                    <div
                      className="yahtzee-check-button complete"
                      onClick={() => handleModal("Sam")}
                    >
                      {samScore}
                    </div>
                  )}
                </>
              )}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row !== 18 &&
              (row === 8 || row === 10 || row === 19 || row === 20) &&
              !zeroOutBoxSam && <>{samScore}</>}
            {row !== 1 &&
              row !== 9 &&
              row !== 13 &&
              row !== 14 &&
              row !== 15 &&
              row !== 16 &&
              row === 18 &&
              !zeroOutBoxSam && (
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
      {modal && row > 7 && (
        <YahtzeeScoreModal
          handleModalScoreChange={handleModalScoreChange}
          title={rowTitle}
          currentPlayer={currentPlayer}
          currentScore={playerScore}
        />
      )}
      {modal && row <= 7 && (
        <YahtzeeScoreModalTop
          handleModalScoreChange={handleModalScoreChange}
          title={rowTitle}
          currentPlayer={currentPlayer}
          currentScore={playerScore}
          row={row}
        />
      )}
    </>
  );
};

export default YahtzeeRow;
