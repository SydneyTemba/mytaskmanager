import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ description: taskDescription });
    setTaskDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit" className="task-submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
