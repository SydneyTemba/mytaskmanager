
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';
import About from './pages/About';
import Navigation from './components/Navigation';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
