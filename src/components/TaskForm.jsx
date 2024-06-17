import React, { useState } from 'react';
//import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="New task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
