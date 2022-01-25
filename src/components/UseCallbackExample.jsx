import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some Task"]);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />

      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");

  return (
    <div>
      <button onClick={addTask} className="btn btn-primary">
        This is the button to add a task
      </button>
    </div>
  );
});

export default UseCallbackExample;
