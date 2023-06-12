import delete_icon from "../../assets/icons/delete.png";
import { useState, useEffect } from "react";

const BoxContent = ({
  todoList,
  primaryColor,
  removerDaLista,
  toggleTodoStatus,
  activeMenu,
}) => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    if (activeMenu === 0) setLista(todoList);
    if (activeMenu === 1)
      setLista(todoList.filter((i) => i.completo === false));
    if (activeMenu === 2) setLista(todoList.filter((i) => i.completo === true));
  }, [activeMenu, todoList]);

  return (
    <div className="box-content">
      {todoList === "" ? (
        <p>Crie uma tarefa para começar o seu dia!</p>
      ) : (
        lista.map((listItem) => {
          return (
            <div className="item" key={listItem.id}>
              <label
                className={`container ${listItem.completo ? "completed" : ""}`}
              >
                {listItem.descricao}
                <input
                  type="checkbox"
                  onChange={() => toggleTodoStatus(listItem.id)}
                  defaultChecked={listItem.completo}
                />
                <span className={`checkmark ${primaryColor}`}></span>
              </label>
              <div
                className="remover"
                onClick={(e) => removerDaLista(listItem.id)}
              >
                <img src={delete_icon} alt="remover" title="Remover item" />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default BoxContent;
