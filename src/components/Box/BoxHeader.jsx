import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const BoxHeader = ({
  todoText,
  setTodoText,
  activeMenu,
  setActiveMenu,
  menus,
  primaryColor,
  adicionarNaLista,
  qtdMetasNaLista,
}) => {
  const changeActiveMenu = (index) => {
    setActiveMenu(index);
  };

  const handleTextInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!todoText) return;

    // Salva o state  ao teclar ENTER
    if (e.keyCode == 13) {
      adicionarNaLista();
      setActiveMenu(0);
    }
  };

  return (
    <div className={`box-header ${primaryColor}`}>
      <div className="text-area">
        <FontAwesomeIcon className="icon" icon={faAlignLeft} />
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => handleTextInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          value={todoText}
        />
      </div>
      <ul className="menu">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={menu.id === activeMenu ? "active" : ""}
            onClick={() => changeActiveMenu(menu.id)}
          >
            {menu.texto}{" "}
            {menu.id === activeMenu && qtdMetasNaLista > 0
              ? "(" + qtdMetasNaLista + ")"
              : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxHeader;
