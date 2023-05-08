import { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import Box from "../../components/Box";

const Home = () => {
  const [primaryColor, setPrimaryColor] = useState("blue");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme === true) {
      document.body.style.backgroundColor = "#414141";
    } else {
      document.body.style.backgroundColor = `var(--${primaryColor})`;
    }
  }, [darkTheme, primaryColor]);

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
    }
  };

  const handleDarkTheme = (state) => {
    setDarkTheme(state);
  };

  return (
    <div className="wrapper">
      <Nav
        handleThemeColor={handleThemeColor}
        handleDarkTheme={handleDarkTheme}
        darkTheme={darkTheme}
      />
      <Box primaryColor={primaryColor} darkTheme={darkTheme} />
    </div>
  );
};

export default Home;
