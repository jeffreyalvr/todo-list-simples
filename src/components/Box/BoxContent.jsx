import delete_icon from "../../assets/icons/delete.png";

const BoxContent = ({
  todoList,
  primaryColor,
  removeFromList,
  toggleTodoStatus,
}) => {
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
            <div className="remover" onClick={(e) => removeFromList(item.id)}>
              <img src={delete_icon} alt="remover" title="Remover item" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BoxContent;
