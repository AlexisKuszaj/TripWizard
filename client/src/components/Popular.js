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
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
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