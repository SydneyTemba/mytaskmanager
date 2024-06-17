import React from 'react';
//import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Task Manager App</h1>
        <p>Effortlessly manage your tasks and boost your productivity.</p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Organize Your Tasks</h2>
          <p>Keep track of all your tasks in one place, prioritize them, and stay on top of your to-do list.</p>
        </div>
        <div className="feature">
          <h2>Stay Focused</h2>
          <p>Set deadlines, receive reminders, and stay focused on what matters most.</p>
        </div>
        <div className="feature">
          <h2>Collaborate</h2>
          <p>Share your tasks with others, assign tasks, and work together to achieve your goals.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>Get started today and take control of your tasks!</p>
      </footer>
    </div>
  );
};

export default Home;
