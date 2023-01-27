import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Curriculum from './pages/Curriculum';

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/curriculum">Curriculum</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/curriculum' element={<Curriculum/>}  />
      </Routes>
    </Router>
  )
}

export default App;