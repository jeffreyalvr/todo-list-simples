import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const BoxHeader = () => {
  const menus = ["todas", "pendentes", "completadas"];
  const [activeMenu, setActiveMenu] = useState(0);

  const changeActiveMenu = (index) => {
    setActiveMenu(index);
  };

  return (
    <div className="box-header">
      <div className="text-area">
        <FontAwesomeIcon className="icon" icon={faAlignLeft} />
        <input type="text" placeholder="Adicione uma nova tarefa" />
      </div>
      <ul className="menu">
        {menus.map((menu, index) => (
          <li
            onClick={() => changeActiveMenu(index)}
            className={index === activeMenu ? "active" : ""}
            key={index}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxHeader;
