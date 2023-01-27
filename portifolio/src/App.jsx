import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Curriculum from './pages/Curriculum';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='Container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/curriculum' element={<Curriculum />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;