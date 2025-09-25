import { useState } from "react";
import Board from "./components/Board";
import "./style.css";
import Footer from "./components/Footer";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [input, setInput] = useState("");

  const handleAddClick = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-col">
          <h1 className="text-center pt-5">Add ToDo List</h1>
          <form className="row g-3 justify-content-center pt-4">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Add a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button className="cust-btn mb-3" onClick={handleAddClick}>
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="row justify-content-center">
          {taskList.map((task, index) => (
            <Board
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
        
      </div>
        <Footer/>
    </>
  );
}

export default App;
