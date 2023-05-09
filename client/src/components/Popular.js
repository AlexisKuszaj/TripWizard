import React from 'react';
import { Link } from 'react-router-dom'
import Home from './Home';

import unnamed from '../Images/unnamed.png'
// import Home from './Home';

const Popular = () => {
    return (
        <div className='popular'>

            <nav className='nav-secondary'>
                <div className="img-container">
                    <img className="logo" src={unnamed} alt="Logo" />
                </div>
            </nav>
            <div className='main-content'>

            <div className='side-nav'>
                <div className='side-nav-links'> 
                
                <ul className='side'>
                    <li><Link to="/" element={< Home/>} >Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
            <div className='main'>
                
            </div>
            </div>
            </div>
            );
}

            export default Popular;