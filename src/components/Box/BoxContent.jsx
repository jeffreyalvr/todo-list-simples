import delete_icon from "../../assets/icons/delete.png";

const BoxContent = ({
  todoList,
  setTodoList,
  activeMenu,
  primaryColor,
  darkTheme,
}) => {
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
    <div className="box-content">
      {todoList == "" ? (
        <p>Crie uma tarefa para começar o seu dia!</p>
      ) : (
        todoList.map((item) => (
          <div className="item" key={item.id}>
            <label className={`container ${item.complete ? "completed" : ""}`}>
              {item.description}
              <input
                type="checkbox"
                onChange={() => toggleTodoStatus(item.id)}
                defaultChecked={item.complete}
              />
              <span className={`checkmark ${primaryColor}`}></span>
            </label>
            <div className="remover">
              <img src={delete_icon} alt="remover" title="Remover item" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BoxContent;
