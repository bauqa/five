import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
function Nav() {
  return (
    <div className='contnet'>
        
        <nav className='nav'>
            <Link to='/'>
            <img src='https://segmento-target.ru/Content/img/new-landing-by-tooligram/logo.png' alt/>
            </Link>

            <Link to="/" className="menuItem">Главный</Link>
        </nav>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  );
};

export default Nav;