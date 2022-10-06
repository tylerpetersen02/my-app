import React from "react";
import "./icon-select.css";

import { GiFox } from "react-icons/gi";
import { FaChessPawn } from "react-icons/fa";
import { RiBugFill } from "react-icons/ri";
import { GiSewingString } from "react-icons/gi";
import { TbPuzzle2 } from "react-icons/tb";
import { CgCardSpades } from "react-icons/cg";
import { GiRollingDiceCup } from "react-icons/gi";

type IconSelectProps = {
  icon: String;
  size: String;
};

const IconSelect = (props: IconSelectProps) => {
  const { icon, size } = props;

  const iconSize = size === "large" ? "page-icon-large" : "button-icon-small";

  let iconSelect;

  switch (icon) {
    case "Golf":
      iconSelect = <CgCardSpades className={iconSize} />;
      break;
    case "Blokus":
      iconSelect = <TbPuzzle2 className={iconSize} />;
      break;
    case "Patchwork":
      iconSelect = <GiSewingString className={iconSize} />;
      break;
    case "Hive":
      iconSelect = <RiBugFill className={iconSize} />;
      break;
    case "Fox In The Forest":
      iconSelect = <GiFox className={iconSize} />;
      break;
    case "Chess":
      iconSelect = <FaChessPawn className={iconSize} />;
      break;
    case "Yahtzee":
      iconSelect = <GiRollingDiceCup className={iconSize} />;
  }
  return <>{iconSelect}</>;
};

export default IconSelect;
