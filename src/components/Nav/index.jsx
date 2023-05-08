import React from "react";

import light_icon from "../../assets/icons/light.png";
import dark_icon from "../../assets/icons/dark.png";

import "./styles.css";

const index = ({ handleThemeColor, handleDarkTheme }) => {
  return (
    <nav>
      <div className="temas">
        <div
          className="item light"
          alt="tema light"
          title="tema light"
          onClick={(e) => handleDarkTheme(false)}
        >
          <img src={light_icon} />
        </div>
        <div
          className="item dark"
          alt="tema dark"
          title="tema dark"
          onClick={(e) => handleDarkTheme(true)}
        >
          <img src={dark_icon} />
        </div>
      </div>
      <div className="colors">
        <div
          className="item red"
          alt="vermelho"
          title="vermelho"
          onClick={(e) => handleThemeColor("red")}
        ></div>
        <div
          className="item green"
          alt="verde"
          title="verde"
          onClick={(e) => handleThemeColor("green")}
        ></div>
        <div
          className="item blue"
          alt="azul"
          title="azul"
          onClick={(e) => handleThemeColor("blue")}
        ></div>
        <div
          className="item yellow"
          alt="amarelo"
          title="amarelo"
          onClick={(e) => handleThemeColor("yellow")}
        ></div>
        <div
          className="item pink"
          alt="rosa"
          title="rosa"
          onClick={(e) => handleThemeColor("pink")}
        ></div>
        <div
          className="item purple"
          alt="roxo"
          title="roxo"
          onClick={(e) => handleThemeColor("purple")}
        ></div>
      </div>
    </nav>
  );
};

export default index;
