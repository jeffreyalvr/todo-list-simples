import { useState } from "react";

import "./styles.css";

import BoxContent from "./BoxContent";
import BoxHeader from "./BoxHeader";

const Box = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const menus = ["todas", "pendentes", "completadas"];
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <main className="box">
      <BoxHeader
        todoText={todoText}
        setTodoText={setTodoText}
        menus={menus}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <BoxContent
        todoList={todoList}
        setTodoList={setTodoList}
        activeMenu={activeMenu}
      />
    </main>
  );
};

export default Box;
