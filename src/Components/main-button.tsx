import React from "react";
import "./main-button.css";
import IconSelect from "./icon-select";

type MainAppButtonProps = {
  buttonText: String;
  buttonBorder: String;
};

const MainButton = (props: MainAppButtonProps) => {
  const { buttonText, buttonBorder } = props;
  const borderColor =
    buttonBorder === "yellow" ? "main-button border-yellow" : "main-button";

  return (
    <button className={borderColor}>
      <IconSelect icon={buttonText} size={"small"} />
      {buttonText}
    </button>
  );
};

export default MainButton;
