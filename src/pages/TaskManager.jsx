import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const addTask = (task) => {
    fetch(`http://127.0.0.1:8000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: task.description }), 
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail) {
          throw new Error(data.detail);
        }
        setTasks([...tasks, data]);
      })
      .catch((err) => setError(err.message));
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-manager">
      <header className="task-manager-header">
        <h1>Task Manager</h1>
        <p>Stay organized and manage your tasks effectively.</p>
      </header>
      <section className="task-form-section">
        <TaskForm addTask={addTask} />
      </section>
      {error && <p className="error">{error}</p>}
      <section className="task-list-section">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </section>
    </div>
  );
};

export default TaskManager;
