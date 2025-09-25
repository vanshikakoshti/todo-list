import React, { useState } from 'react';

const Board = ({ task, index, taskList, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditSave = () => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = editedTask;
    setTaskList(updatedTasks);
    setIsEditing(false);
  };

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 pb-3 pr-pl-25">
      <div className="form-control d-flex flex-column justify-content-center align-items-center add-box">
        {isEditing ? (
          <>
            <input type="text" className="form-control mb-2" value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <div className='d-flex'>
            <button type="button" className="btn btn-success mx-2" onClick={handleEditSave} >
              Save
            </button>
            <button type="button" className="btn btn-secondary mx-2" onClick={() => {
                setIsEditing(false);
                setEditedTask(task); // Reset edit text
              }}
            >Cancel </button>
            </div>
          </>
        ) : (
          <>
            <p>{task}</p>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-primary me-2" onClick={() => setIsEditing(true)} >
                Edit</button>
              <button type="button" className="btn btn-danger" onClick={() =>
                  setTaskList(taskList.filter((task, i) => i !== index))
                }> Delete </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
