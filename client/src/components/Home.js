import React from 'react';
import { Link } from 'react-router-dom'
import orlando from '../Images/orlando.jpg'
import arrow from '../Images/arrow.png'
import unnamed from '../Images/unnamed.png'
import Popular from './Popular';

const Home = () => {
  return (
    <div className='Home'>

      <nav>
        <div className="img-container">
          <img className="logo" src={unnamed} alt="Logo" />
        </div>
        <ul>
          <li><Link to="/popular" element={< Popular />} >Plan</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
        </ul>
      </nav>
      <div>
        <Link to="/popular" element={< Popular />}><img className="main-img" src={orlando} alt="Wizarding World" /></Link>
        <div className='text-overlay'>
          <h1 className='img-header'>EXPLORE THE MAGIC</h1>
          <hr />
          <img className='arrow' src={arrow} alt='arrow' />
        </div>
      </div>
    </div>
  );
}

export default Home;
