import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // fetch tasks from mock api
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // fetch task from mock api
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //delete task
  const deleteTask = async (id) => {
    //delete from server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //add task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  //add task in server
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  //toggle reminder
  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id
  //         ? {
  //             ...task,
  //             remainder: !task.remainder,
  //           }
  //         : task
  //     )
  //   );
  // };

  //toggle reminder in server
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: data.reminder,
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
          onDdbClick={toggleReminder}
          tasks={tasks}
          onDelete={deleteTask}
        />
      ) : (
        <div style={{ marginTop: "20px" }}>Loading ..</div>
      )}
    </div>
  );
};

export default App;
