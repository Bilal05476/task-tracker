import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: "Javascript learn",
      date: "23 june at 15:00",
      remainder: true,
    },
    {
      id: 1,
      name: "ReactJs learn",
      date: "25 june at 14:45",
      remainder: false,
    },
    {
      id: 2,
      name: "Python learn",
      date: "15 june at 12:55",
      remainder: true,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //toggle reminder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              remainder: !task.remainder,
            }
          : task
      )
    );
  };

  return (
    <div className="container">
      <Header setToggleBtn={setToggleBtn} toggleBtn={toggleBtn} />
      {toggleBtn && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          onDdbClick={toggleRemainder}
          tasks={tasks}
          onDelete={deleteTask}
        />
      ) : (
        <div style={{ marginTop: "20px" }}>No tasks to show</div>
      )}
    </div>
  );
};

export default App;
