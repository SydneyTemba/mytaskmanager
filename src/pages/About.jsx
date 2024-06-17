import React from 'react';
//import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Task Manager App</h1>
        <p>Learn more about our task management application.</p>
      </header>
      <section className="about-content">
        <p>The Task Manager App is designed to help individuals and teams manage their tasks efficiently. Whether you're organizing your personal to-do list or collaborating with others on projects, our app provides the tools you need to stay productive.</p>
        <p>Key features include:</p>
        <ul>
          <li>Task creation and management</li>
          <li>Task prioritization and deadlines</li>
          <li>Collaboration and task assignment</li>
          <li>Intuitive user interface</li>
          <li>Responsive design for all devices</li>
        </ul>
        <p>Get started today and experience a new level of productivity with the Task Manager App!</p>
      </section>
    </div>
  );
};

export default About;
