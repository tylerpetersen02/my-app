import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import GolfMain from "./Pages/Golf/golf-main";
import GolfNewGame from "./Pages/Golf/golf-new-game";
import GolfPreviousGames from "./Pages/Golf/golf-previous-games";
import BlokusMain from "./Pages/Blokus/blokus-main";
import BlokusNewGame from "./Pages/Blokus/blokus-new-game";
import BlokusPreviousGames from "./Pages/Blokus/blokus-previous-games";
import PatchworkMain from "./Pages/Patchwork/patchwork-main";
import PatchworkNewGame from "./Pages/Patchwork/patchwork-new-game";
import PatchworkPreviousGames from "./Pages/Patchwork/patchwork-previous-games";
import HiveMain from "./Pages/Hive/hive-main";
import HiveNewGame from "./Pages/Hive/hive-new-game";
import HivePreviousGames from "./Pages/Hive/hive-previous-games";
import FoxInTheForestMain from "./Pages/Fox_In_The_Forest/fox-in-the-forest-main";
import FoxInTheForestNewGame from "./Pages/Fox_In_The_Forest/fox-in-the-forest-new-game";
import FoxInTheForestPreviousGames from "./Pages/Fox_In_The_Forest/fox-in-the-forest-previous-games";
import ChessMain from "./Pages/Chess/chess-main";
import ChessNewGame from "./Pages/Chess/chess-new-game";
import ChessPreviousGames from "./Pages/Chess/chess-previous-games";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golf" element={<GolfMain />} />
          <Route path="/golf/golf-new-game" element={<GolfNewGame />} />
          <Route
            path="/golf/golf-previous-games"
            element={<GolfPreviousGames />}
          />
          <Route path="/blokus" element={<BlokusMain />} />
          <Route path="/blokus/blokus-new-game" element={<BlokusNewGame />} />
          <Route
            path="/blokus/blokus-previous-games"
            element={<BlokusPreviousGames />}
          />
          <Route path="/patchwork" element={<PatchworkMain />} />
          <Route
            path="/patchwork/patchwork-new-game"
            element={<PatchworkNewGame />}
          />
          <Route
            path="/patchwork/patchwork-previous-games"
            element={<PatchworkPreviousGames />}
          />
          <Route path="/hive" element={<HiveMain />} />
          <Route path="/hive/hive-new-game" element={<HiveNewGame />} />
          <Route
            path="/hive/hive-previous-games"
            element={<HivePreviousGames />}
          />
          <Route path="/fox-in-the-forest" element={<FoxInTheForestMain />} />
          <Route
            path="/fox-in-the-forest/fox-in-the-forest-new-game"
            element={<FoxInTheForestNewGame />}
          />
          <Route
            path="/fox-in-the-forest/fox-in-the-forest-previous-games"
            element={<FoxInTheForestPreviousGames />}
          />
          <Route path="/chess" element={<ChessMain />} />
          <Route path="/chess/chess-new-game" element={<ChessNewGame />} />
          <Route
            path="/chess/chess-previous-games"
            element={<ChessPreviousGames />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
