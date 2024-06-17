import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="task-item">
      <span>{task.description}</span>
      <button onClick={deleteTask} className="delete-button">Delete</button>
    </li>
  );
};

export default TaskItem;
