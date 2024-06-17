import React from 'react';
//import './TaskItem.css';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="task-item">
      {task}
      <button onClick={deleteTask} className="delete-button">Delete</button>
    </li>
  );
};

export default TaskItem;
