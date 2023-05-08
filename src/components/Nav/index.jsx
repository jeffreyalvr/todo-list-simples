import React from "react";

import "./styles.css";

const index = ({ handleThemeColor }) => {
  return (
    <nav>
      <div className="colors">
        <div
          className="col-item red"
          alt="vermelho"
          title="vermelho"
          onClick={(e) => handleThemeColor("red")}
        ></div>
        <div
          className="col-item green"
          alt="verde"
          title="verde"
          onClick={(e) => handleThemeColor("green")}
        ></div>
        <div
          className="col-item blue"
          alt="azul"
          title="azul"
          onClick={(e) => handleThemeColor("blue")}
        ></div>
        <div
          className="col-item yellow"
          alt="amarelo"
          title="amarelo"
          onClick={(e) => handleThemeColor("yellow")}
        ></div>
        <div
          className="col-item pink"
          alt="rosa"
          title="rosa"
          onClick={(e) => handleThemeColor("pink")}
        ></div>
        <div
          className="col-item purple"
          alt="roxo"
          title="roxo"
          onClick={(e) => handleThemeColor("purple")}
        ></div>
      </div>
    </nav>
  );
};

export default index;
