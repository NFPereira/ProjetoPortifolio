import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Curriculum from './pages/Curriculum';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/curriculum' element={<Curriculum />} />
      </Routes>
    </Router>
  )
}

export default App;