import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onDdbClick }) => {
  return (
    <div
      onDoubleClick={() => onDdbClick(task.id)}
      className={`task ${task.remainder ? "remainder" : ""}`}
    >
      <div>
        <h4>{task.name}</h4>
        <p>{task.date}</p>
      </div>
      <FaTimes
        onClick={() => onDelete(task.id)}
        style={{ color: "crimson", cursor: "pointer" }}
      />
    </div>
  );
};

export default Task;
