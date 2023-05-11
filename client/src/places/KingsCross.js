import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import unnamed from '../Images/unnamed.png'
import Popular from '../components/Popular.js';
import HogwartsExpress from '../Images/HogwartsExpress.jpg'
import London from '../places/London';


const KingsCross = () => {
    const navigate = useNavigate()

    const homeLogo = (e) => {
        navigate('/')
    }
    return (
        <div className='kingscross'>
            <nav>
                <div className="img-container">
                    <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                </div>
                <ul>
                    <li><Link to="/popular" element={< Popular />} className='link'>Plan</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='contact' className='link'>Contact</Link></li>
                </ul>
            </nav>
            <div className='kingscross-img-container'>
                <img className="kingscross" src={HogwartsExpress} alt='Kings Cross' />
                <div className="overlaybox">
                    <h1>King's Cross Station</h1>
                    <h3>Euston Rd., London N1 9AL, UK</h3>
            <h2> Start your journey here </h2>
            <p >Come visit the iconic King's Cross Station! In the Movie 1 - Harry Potter and the Sorcerers Stone, Harry and his friends dash through a brick wall between platforms 9 and 10. In the real King’s Cross Station, platforms 9 and 10 are separated by tracks, but you can find a platform 9¾ on the wall in the station concourse. After visiting the Hogwarts Express, take a stroll through the Harry Potter Shop. Styled after Ollivander's wand emporium. Pick up your school robes for your house, as well  as, time-turners and horcruxes.</p>
                </div>
            </div>
        </div>
    );
}
export default KingsCross;
