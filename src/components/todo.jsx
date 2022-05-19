import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  return (
    <li className="todo-item">
      <div className="wrap-itens">
        <input
          type="checkbox"
          checked={props.todo.checked}
          onChange={props.onCheck}
        />
        <span>{props.todo.text}</span>
      </div>
      <button className="delete-btn" onClick={props.onDelete}>
        <FontAwesomeIcon icon={faTrashCan} className="delete-icon" />
      </button>
    </li>
  );
}

export default Todo;
