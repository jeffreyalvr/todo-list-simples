import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const BoxHeader = ({
  todoText,
  setTodoText,
  activeMenu,
  setActiveMenu,
  menus,
  todoList,
  setTodoList,
}) => {
  const changeActiveMenu = (index) => {
    setActiveMenu(index);
  };

  const handleTextInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const addToList = () => {
    const novaMeta = {
      description: todoText,
      complete: false,
      id: todoList.length + 1,
    };
    setTodoList([...todoList, novaMeta]);
    setTodoText("");
  };

  const handleKeyDown = (e) => {
    if (!todoText) return;

    // Salva o state  ao teclar ENTER
    if (e.keyCode == 13) addToList();
  };

  return (
    <div className="box-header">
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
