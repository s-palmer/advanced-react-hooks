import ToDo from "./ToDo";
import { useState } from "react";

const UseRefExample3 = () => {
  const [showToDo, setShowToDo] = useState(true);

  return (
    <div>
      {showToDo && <ToDo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowToDo(!showToDo)}
      >
        Toggle To Do
      </button>
    </div>
  );
};

export default UseRefExample3;
