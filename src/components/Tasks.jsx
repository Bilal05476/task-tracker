import Task from "./Task";

const Tasks = ({ tasks, onDelete, onDdbClick }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDdbClick={onDdbClick}
        />
      ))}
    </div>
  );
};

export default Tasks;
