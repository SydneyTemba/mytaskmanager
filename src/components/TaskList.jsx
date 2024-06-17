import React from 'react';
import TaskItem from './TaskItem';
//import './TaskList.css';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </ul>
  );
};

export default TaskList;
