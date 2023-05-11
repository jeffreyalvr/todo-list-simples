import { useState, useEffect } from "react";

import "./styles.css";

import BoxContent from "./BoxContent";
import BoxHeader from "./BoxHeader";

const Box = ({ primaryColor, darkTheme }) => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.table(todoList);
  }, [todoList]);

  const menus = ["todas", "pendentes", "completadas"];
  const [activeMenu, setActiveMenu] = useState(0);

  const limparInput = () => {
    setTodoText("");
  };

  const adicionarNaLista = () => {
    let ultimoIdUsado = Math.max(...todoList.map((item) => item.id));

    const novaMeta = {
      descricao: todoText,
      completo: false,
      id: ultimoIdUsado <= 0 ? 1 : ultimoIdUsado + 1,
    };
    setTodoList([...todoList, novaMeta]);

    limparInput();
  };

  const removerDaLista = (id) => {
    let listaAposRemocao = todoList.filter((item) => item.id != id);
    setTodoList(listaAposRemocao);
  };

  const toggleTodoStatus = (id) => {
    let novaLista = [...todoList];

    for (let i in novaLista) {
      if (novaLista[i].id === id) {
        novaLista[i].completo = !novaLista[i].completo;
      }
    }

    setTodoList(novaLista);
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
        adicionarNaLista={adicionarNaLista}
      />
      <BoxContent
        todoList={todoList}
        setTodoList={setTodoList}
        activeMenu={activeMenu}
        primaryColor={primaryColor}
        removerDaLista={removerDaLista}
        toggleTodoStatus={toggleTodoStatus}
      />
    </main>
  );
};

export default Box;
