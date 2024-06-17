import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
//import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
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
      <section className="task-list-section">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </section>
    </div>
  );
};

export default TaskManager;
