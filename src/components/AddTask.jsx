import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please add task name");
      return;
    } else if (!date) {
      setError("Please add task date");
      return;
    } else {
      onAdd({ name, date, reminder });
      setError("");
    }

    setName("");
    setDate("");
    setReminder(false);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Task Name"
          />
        </div>
        <div className="form-control">
          <label>Task Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="text"
            placeholder="Task date"
          />
        </div>
        <div className="form-control remainder">
          <label>Set Reminder</label>
          <input
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            checked={reminder}
            type="checkbox"
          />
        </div>
        <input value="Save" type="submit" className="btn" />

        <div
          style={{
            marginTop: "20px",
            color: "crimson",
            background: "pink",
            padding: `${error ? "10px" : "0"}`,
            borderRadius: "5px",
          }}
        >
          {error}
        </div>
      </form>
    </div>
  );
};

export default AddTask;
