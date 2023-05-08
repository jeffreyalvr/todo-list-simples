import { useState } from "react";

import "./styles.css";

import BoxContent from "./BoxContent";
import BoxHeader from "./BoxHeader";

const Box = ({ primaryColor, darkTheme }) => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const menus = ["todas", "pendentes", "completadas"];
  const [activeMenu, setActiveMenu] = useState(0);

  const addToList = () => {
    const novaMeta = {
      description: todoText,
      complete: false,
      id: todoList.length + 1,
    };
    setTodoList([...todoList, novaMeta]);
    setTodoText("");
  };

  const removeFromList = (id) => {
    alert(id);
  };

  const toggleTodoStatus = (id) => {
    let newList = [...todoList];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].complete = !newList[i].complete;
      }
    }

    setTodoList(newList);
  };

  return (
    <main className={`box ${darkTheme ? "dark" : "light"}`}>
      <BoxHeader
        todoText={todoText}
        setTodoText={setTodoText}
        menus={menus}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        primaryColor={primaryColor}
        addToList={addToList}
      />
      <BoxContent
        todoList={todoList}
        setTodoList={setTodoList}
        activeMenu={activeMenu}
        primaryColor={primaryColor}
        removeFromList={removeFromList}
        toggleTodoStatus={toggleTodoStatus}
      />
    </main>
  );
};

export default Box;
