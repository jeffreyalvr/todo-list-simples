import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const BoxContent = ({ todoList, setTodoList, activeMenu, primaryColor }) => {
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
            <label className={item.complete ? "completed" : ""}>
              <input
                type="checkbox"
                onChange={() => toggleTodoStatus(item.id)}
                defaultChecked={item.complete}
              />
              {item.description}
            </label>
          </div>
        ))
      )}
    </div>
  );
};

export default BoxContent;
