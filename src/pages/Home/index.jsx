import { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import Box from "../../components/Box";

const Home = () => {
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("cor") || "blue"
  );
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("tema_escuro") === "true"
  );

  useEffect(() => {
    if (darkTheme === true) {
      document.body.style.backgroundColor = "#414141";
    } else {
      document.body.style.backgroundColor = `var(--${primaryColor})`;
    }
  }, [primaryColor, darkTheme]);

  const handleThemeColor = (color) => {
    switch (color) {
      case "red":
        setPrimaryColor("red");
        break;
      case "green":
        setPrimaryColor("green");
        break;
      case "blue":
        setPrimaryColor("blue");
        break;
      case "yellow":
        setPrimaryColor("yellow");
        break;
      case "pink":
        setPrimaryColor("pink");
        break;
      case "purple":
        setPrimaryColor("purple");
        break;
      default:
        setPrimaryColor("blue");
    }

    localStorage.setItem("cor", color);
  };

  const handleDarkTheme = (status) => {
    setDarkTheme(status);
    localStorage.setItem("tema_escuro", status);
  };

  return (
    <div className="wrapper">
      <Nav
        handleThemeColor={handleThemeColor}
        handleDarkTheme={handleDarkTheme}
        primaryColor={primaryColor}
        darkTheme={darkTheme}
      />
      <Box primaryColor={primaryColor} darkTheme={darkTheme} />
    </div>
  );
};

export default Home;
