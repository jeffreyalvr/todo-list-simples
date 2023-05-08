import { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import Box from "../../components/Box";

const Home = () => {
  const [primaryColor, setPrimaryColor] = useState("blue");

  useEffect(() => {
    document.body.style.backgroundColor = `var(--${primaryColor})`;
  }, [primaryColor]);

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

  return (
    <div className="wrapper">
      <Nav handleThemeColor={handleThemeColor} />
      <Box primaryColor={primaryColor} />
    </div>
  );
};

export default Home;
