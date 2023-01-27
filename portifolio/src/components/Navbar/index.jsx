import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='nav'>
            <div className='brand'>
                <Link to="/">Portifólio</Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link to="/curriculum">Curriculum</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;