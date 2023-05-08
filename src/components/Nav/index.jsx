import { useState, useEffect } from "react";

import light_icon from "../../assets/icons/light.png";
import dark_icon from "../../assets/icons/dark.png";

import "./styles.css";

const Nav = ({
  handleThemeColor,
  handleDarkTheme,
  primaryColor,
  darkTheme,
}) => {
  return (
    <nav>
      <div className="temas">
        <div
          className={`item light ${primaryColor} ${!darkTheme ? "active" : ""}`}
          alt="tema claro"
          title="Ativar tema claro"
          onClick={(e) => handleDarkTheme(false)}
        >
          <img src={light_icon} />
        </div>
        <div
          className={`item dark ${primaryColor} ${darkTheme ? "active" : ""} `}
          alt="tema escuro"
          title="Ativar tema escuro"
          onClick={(e) => handleDarkTheme(true)}
        >
          <img src={dark_icon} />
        </div>
      </div>
      <div className="colors">
        <div
          className="item red"
          alt="vermelho"
          title="Tema vermelho"
          onClick={(e) => handleThemeColor("red")}
        ></div>
        <div
          className="item green"
          alt="verde"
          title="Tema verde"
          onClick={(e) => handleThemeColor("green")}
        ></div>
        <div
          className="item blue"
          alt="azul"
          title="Tema azul"
          onClick={(e) => handleThemeColor("blue")}
        ></div>
        <div
          className="item yellow"
          alt="amarelo"
          title="Tema amarelo"
          onClick={(e) => handleThemeColor("yellow")}
        ></div>
        <div
          className="item pink"
          alt="rosa"
          title="Tema rosa"
          onClick={(e) => handleThemeColor("pink")}
        ></div>
        <div
          className="item purple"
          alt="roxo"
          title="Tema roxo"
          onClick={(e) => handleThemeColor("purple")}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
