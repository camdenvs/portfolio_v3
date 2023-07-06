import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
