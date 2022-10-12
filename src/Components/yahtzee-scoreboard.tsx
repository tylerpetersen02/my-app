import React, { useState, useEffect } from "react";
import "./../App.css";
import "./yahtzee-scoreboard.css";
import YahtzeeRow from "./yahtzee-row";
import { BiDice1 } from "react-icons/bi";
import { BiDice2 } from "react-icons/bi";
import { BiDice3 } from "react-icons/bi";
import { BiDice4 } from "react-icons/bi";
import { BiDice5 } from "react-icons/bi";
import { BiDice6 } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type GameType = {
  game: String;
};

const YahtzeeScoreboard = (props: GameType) => {
  const [tylerAces, setTylerAces] = useState<number>(0);
  const [tylerTwos, setTylerTwos] = useState<number>(0);
  const [tylerThrees, setTylerThrees] = useState<number>(0);
  const [tylerFours, setTylerFours] = useState<number>(0);
  const [tylerFives, setTylerFives] = useState<number>(0);
  const [tylerSixes, setTylerSixes] = useState<number>(0);
  const [tylerUpperNumbers, setTylerUpperNumbers] = useState<number>(0);
  const tylerUpperBonus = tylerUpperNumbers >= 63 ? 35 : 0;
  const [tylerUpperTotal, setTylerUpperTotal] = useState<number>(0);
  const [tyler3OfAKind, setTyler3OfAKind] = useState<number>(0);
  const [tyler4OfAKind, setTyler4OfAKind] = useState<number>(0);
  const [tylerFullHouse, setTylerFullHouse] = useState<boolean | number>(false);
  const [tylerSmallStraight, setTylerSmallStraight] = useState<
    boolean | number
  >(false);
  const [tylerLargeStraight, setTylerLargeStraight] = useState<
    boolean | number
  >(false);
  const [tylerYahtzee, setTylerYahtzee] = useState<boolean | number>(false);
  const [tylerChance, setTylerChance] = useState<number>(0);
  const [tylerBonusYahtzee, setTylerBonusYahtzee] = useState<number>(0);
  const [tylerLowerTotal, setTylerLowerTotal] = useState<number>(0);

  const [samAces, setSamAces] = useState<number>(0);
  const [samTwos, setSamTwos] = useState<number>(0);
  const [samThrees, setSamThrees] = useState<number>(0);
  const [samFours, setSamFours] = useState<number>(0);
  const [samFives, setSamFives] = useState<number>(0);
  const [samSixes, setSamSixes] = useState<number>(0);
  const [samUpperNumbers, setSamUpperNumbers] = useState<number>(0);
  const samUpperBonus = samUpperNumbers >= 63 ? 35 : 0;
  const [samUpperTotal, setSamUpperTotal] = useState<number>(0);
  const [sam3OfAKind, setSam3OfAKind] = useState<number>(0);
  const [sam4OfAKind, setSam4OfAKind] = useState<number>(0);
  const [samFullHouse, setSamFullHouse] = useState<boolean | number>(false);
  const [samSmallStraight, setSamSmallStraight] = useState<boolean | number>(
    false
  );
  const [samLargeStraight, setSamLargeStraight] = useState<boolean | number>(
    false
  );
  const [samYahtzee, setSamYahtzee] = useState<boolean | number>(false);
  const [samChance, setSamChance] = useState<number>(0);
  const [samBonusYahtzee, setSamBonusYahtzee] = useState<number>(0);
  const [samLowerTotal, setSamLowerTotal] = useState<number>(0);

  const [tylerTotalScore, setTylerTotalScore] = useState<number>(0);
  const [samTotalScore, setSamTotalScore] = useState<number>(0);

  useEffect(() => {
    const tylerUpperNumbersTotal =
      tylerAces +
      tylerTwos +
      tylerThrees +
      tylerFours +
      tylerFives +
      tylerSixes;
    setTylerUpperNumbers(tylerUpperNumbersTotal);
  }, [tylerAces, tylerTwos, tylerThrees, tylerFours, tylerFives, tylerSixes]);

  useEffect(() => {
    const samUpperNumbersTotal =
      samAces + samTwos + samThrees + samFours + samFives + samSixes;
    setSamUpperNumbers(samUpperNumbersTotal);
  }, [samAces, samTwos, samThrees, samFours, samFives, samSixes]);

  useEffect(() => {
    const upperScore = tylerUpperBonus
      ? 35 + tylerUpperNumbers
      : tylerUpperNumbers;
    setTylerUpperTotal(upperScore);
  }, [tylerUpperNumbers, tylerUpperBonus]);

  useEffect(() => {
    const upperScore = samUpperBonus ? 35 + samUpperNumbers : samUpperNumbers;
    setSamUpperTotal(upperScore);
  }, [samUpperNumbers, samUpperBonus]);

  useEffect(() => {
    const fullHouse = tylerFullHouse ? 25 : 0;
    const smallStraight = tylerSmallStraight ? 30 : 0;
    const largeStraight = tylerLargeStraight ? 40 : 0;
    const yahtzee = tylerYahtzee ? 50 : 0;
    const lowerScore =
      tyler3OfAKind +
      tyler4OfAKind +
      fullHouse +
      smallStraight +
      largeStraight +
      yahtzee +
      tylerChance +
      tylerBonusYahtzee;
    setTylerLowerTotal(lowerScore);
  }, [
    tyler3OfAKind,
    tyler4OfAKind,
    tylerFullHouse,
    tylerSmallStraight,
    tylerLargeStraight,
    tylerYahtzee,
    tylerChance,
    tylerBonusYahtzee,
  ]);

  useEffect(() => {
    const fullHouse = samFullHouse ? 25 : 0;
    const smallStraight = samSmallStraight ? 30 : 0;
    const largeStraight = samLargeStraight ? 40 : 0;
    const yahtzee = samYahtzee ? 50 : 0;
    const lowerScore =
      sam3OfAKind +
      sam4OfAKind +
      fullHouse +
      smallStraight +
      largeStraight +
      yahtzee +
      samChance +
      samBonusYahtzee;
    setSamLowerTotal(lowerScore);
  }, [
    sam3OfAKind,
    sam4OfAKind,
    samFullHouse,
    samSmallStraight,
    samLargeStraight,
    samYahtzee,
    samChance,
    samBonusYahtzee,
  ]);

  useEffect(() => {
    const totalScore = tylerUpperTotal + tylerLowerTotal;
    setTylerTotalScore(totalScore);
  }, [tylerUpperTotal, tylerLowerTotal]);

  useEffect(() => {
    const totalScore = samUpperTotal + samLowerTotal;
    setSamTotalScore(totalScore);
  }, [samUpperTotal, samLowerTotal]);

  const handleScoreChange = (
    player: string,
    row: number,
    value: number,
    iteration: string
  ) => {
    if (player === "Tyler") {
      switch (row) {
        case 2:
          setTylerAces(value);
          break;
        case 3:
          setTylerTwos(value);
          break;
        case 4:
          setTylerThrees(value);
          break;
        case 5:
          setTylerFours(value);
          break;
        case 6:
          setTylerFives(value);
          break;
        case 7:
          setTylerSixes(value);
          break;
        case 11:
          setTyler3OfAKind(value);
          break;
        case 12:
          setTyler4OfAKind(value);
          break;
        case 13:
          if (iteration === "incomplete") {
            setTylerFullHouse(false);
          } else if (iteration === "complete") {
            setTylerFullHouse(25);
          } else {
            setTylerFullHouse(0);
          }
          break;
        case 14:
          if (iteration === "incomplete") {
            setTylerSmallStraight(false);
          } else if (iteration === "complete") {
            setTylerSmallStraight(30);
          } else {
            setTylerSmallStraight(0);
          }
          break;
        case 15:
          if (iteration === "incomplete") {
            setTylerLargeStraight(false);
          } else if (iteration === "complete") {
            setTylerLargeStraight(40);
          } else {
            setTylerLargeStraight(0);
          }
          break;
        case 16:
          if (iteration === "incomplete") {
            setTylerYahtzee(false);
          } else if (iteration === "complete") {
            setTylerYahtzee(50);
          } else {
            setTylerYahtzee(0);
          }
          break;
        case 17:
          setTylerChance(value);
      }
    } else {
      switch (row) {
        case 2:
          setSamAces(value);
          break;
        case 3:
          setSamTwos(value);
          break;
        case 4:
          setSamThrees(value);
          break;
        case 5:
          setSamFours(value);
          break;
        case 6:
          setSamFives(value);
          break;
        case 7:
          setSamSixes(value);
          break;
        case 11:
          setSam3OfAKind(value);
          break;
        case 12:
          setSam4OfAKind(value);
          break;
        case 13:
          if (iteration === "incomplete") {
            setSamFullHouse(false);
          } else if (iteration === "complete") {
            setSamFullHouse(25);
          } else {
            setSamFullHouse(0);
          }
          break;
        case 14:
          if (iteration === "incomplete") {
            setSamSmallStraight(false);
          } else if (iteration === "complete") {
            setSamSmallStraight(30);
          } else {
            setSamSmallStraight(0);
          }
          break;
        case 15:
          if (iteration === "incomplete") {
            setSamLargeStraight(false);
          } else if (iteration === "complete") {
            setSamLargeStraight(40);
          } else {
            setSamLargeStraight(0);
          }
          break;
        case 16:
          if (iteration === "incomplete") {
            setSamYahtzee(false);
          } else if (iteration === "complete") {
            setSamYahtzee(50);
          } else {
            setSamYahtzee(0);
          }
          break;
        case 17:
          setSamChance(value);
      }
    }
  };

  const handleBonusYahtzee = (
    tylerBonusYahtzee: number,
    samBonusYahtzee: number
  ) => {
    setTylerBonusYahtzee(tylerBonusYahtzee);
    setSamBonusYahtzee(samBonusYahtzee);
  };

  return (
    <div className="scoreboard-container">
      <div className="yahtzee-container">
        <div className="yahtzee-upper-container">
          <YahtzeeRow
            game={"Yahtzee"}
            row={1}
            rowTitle={"UPPER"}
            rowScoring={"Scoring"}
            tylerScore={0}
            samScore={0}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={2}
            rowTitle={<BiDice1 style={{ fontSize: "1.3rem" }} />}
            rowScoring={"Add Aces"}
            tylerScore={tylerAces}
            samScore={samAces}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={3}
            rowTitle={<BiDice2 style={{ fontSize: "1.3rem" }} />}
            rowScoring={"Add Twos"}
            tylerScore={tylerTwos}
            samScore={samTwos}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={4}
            rowTitle={<BiDice3 style={{ fontSize: "1.3rem" }} />}
            rowScoring={"Add Threes"}
            tylerScore={tylerThrees}
            samScore={samThrees}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={5}
            rowTitle={<BiDice4 style={{ fontSize: "1.3rem" }} />}
            rowScoring={"Add Fours"}
            tylerScore={tylerFours}
            samScore={samFours}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={6}
            rowTitle={<BiDice5 style={{ fontSize: "1.3rem" }} />}
            rowScoring={"Add Fives"}
            tylerScore={tylerFives}
            samScore={samFives}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={7}
            rowTitle={<BiDice6 style={{ fontSize: "1.3rem" }} />}
            rowScoring={"Add Sixes"}
            tylerScore={tylerSixes}
            samScore={samSixes}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={8}
            rowTitle={"Total Score"}
            rowScoring={<BsArrowRight style={{ fontSize: "1.3rem" }} />}
            tylerScore={tylerUpperNumbers}
            samScore={samUpperNumbers}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={9}
            rowTitle={"Bonus > 63"}
            rowScoring={"SCORE 35"}
            tylerScore={tylerUpperBonus}
            samScore={samUpperBonus}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={10}
            rowTitle={"Upper Total"}
            rowScoring={<BsArrowRight style={{ fontSize: "1.3rem" }} />}
            tylerScore={tylerUpperTotal}
            samScore={samUpperTotal}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
        </div>
        <div className="yahtzee-lower-container">
          <YahtzeeRow
            game={"Yahtzee"}
            row={11}
            rowTitle={"3 of a kind"}
            rowScoring={"Add All"}
            tylerScore={tyler3OfAKind}
            samScore={sam3OfAKind}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={12}
            rowTitle={"4 of a kind"}
            rowScoring={"Add All"}
            tylerScore={tyler4OfAKind}
            samScore={sam4OfAKind}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={13}
            rowTitle={"Full House"}
            rowScoring={"Score 25"}
            tylerScore={tylerFullHouse}
            samScore={samFullHouse}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={14}
            rowTitle={"Sm. Straight"}
            rowScoring={"Score 30"}
            tylerScore={tylerSmallStraight}
            samScore={samSmallStraight}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={15}
            rowTitle={"Lg. Straight"}
            rowScoring={"Score 40"}
            tylerScore={tylerLargeStraight}
            samScore={samLargeStraight}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={16}
            rowTitle={"YAHTZEE"}
            rowScoring={"Score 50"}
            tylerScore={tylerYahtzee}
            samScore={samYahtzee}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={17}
            rowTitle={"Chance"}
            rowScoring={"Add All"}
            tylerScore={tylerChance}
            samScore={samChance}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={18}
            rowTitle={"Yahtzee Bonus"}
            rowScoring={"+100 per"}
            tylerScore={tylerBonusYahtzee}
            samScore={samBonusYahtzee}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={19}
            rowTitle={"Lower Total"}
            rowScoring={<BsArrowRight style={{ fontSize: "1.3rem" }} />}
            tylerScore={tylerLowerTotal}
            samScore={samLowerTotal}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
          <YahtzeeRow
            game={"Yahtzee"}
            row={20}
            rowTitle={"Upper Total"}
            rowScoring={<BsArrowRight style={{ fontSize: "1.3rem" }} />}
            tylerScore={tylerUpperTotal}
            samScore={samUpperTotal}
            handleScoreChange={handleScoreChange}
            updateBonusYahtzee={handleBonusYahtzee}
          />
        </div>
      </div>
      <div className="score-total">
        <div className="total-score-tyler">{tylerTotalScore}</div>
        <div className="total-score-sam">{samTotalScore}</div>
      </div>
      <div className="score-total-names">
        <span>Tyler</span>
        <span>Sam</span>
      </div>
    </div>
  );
};

export default YahtzeeScoreboard;
