import React from "react";
import "./main-button.css";

import { GiFox } from "react-icons/gi";
import { FaChessPawn } from "react-icons/fa";
import { RiBugFill } from "react-icons/ri";
import { GiSewingString } from "react-icons/gi";
import { TbPuzzle2 } from "react-icons/tb";
import { CgCardSpades } from "react-icons/cg";

type MainAppButtonProps = {
  buttonText: String;
  buttonBorder: String;
};

const MainButton = (props: MainAppButtonProps) => {
  const { buttonText, buttonBorder } = props;
  const borderColor =
    buttonBorder === "yellow" ? "main-button border-yellow" : "main-button";
  let icon;

  switch (buttonText) {
    case "Golf":
      icon = (
        <CgCardSpades
          style={{ fontSize: "x-large", color: "#fff", marginRight: "10px" }}
        />
      );
      break;
    case "Blokus":
      icon = (
        <TbPuzzle2
          style={{ fontSize: "x-large", color: "#fff", marginRight: "10px" }}
        />
      );
      break;
    case "Patchwork":
      icon = (
        <GiSewingString
          style={{ fontSize: "x-large", color: "#fff", marginRight: "10px" }}
        />
      );
      break;
    case "Hive":
      icon = (
        <RiBugFill
          style={{ fontSize: "x-large", color: "#fff", marginRight: "10px" }}
        />
      );
      break;
    case "Fox In The Forest":
      icon = (
        <GiFox
          style={{ fontSize: "x-large", color: "#fff", marginRight: "10px" }}
        />
      );
      break;
    case "Chess":
      icon = (
        <FaChessPawn
          style={{ fontSize: "x-large", color: "#fff", marginRight: "10px" }}
        />
      );
  }
  return (
    <button className={borderColor}>
      {icon}
      {buttonText}
    </button>
  );
};

export default MainButton;
