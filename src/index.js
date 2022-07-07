import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/layout/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <App />
  </Router>
);