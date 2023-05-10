import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home';
import unnamed from '../Images/unnamed.png'
import kingscross from '../Images/kingsCross.jpg'





// import Home from './Home';

const Popular = () => {
    const navigate = useNavigate()

    const homeLogo = (e) => {
        navigate('/')
    }

    const kingsCross = (e) =>{
        navigate("/kingscross")
    }
    
    return (
        <div className='popular'>

            <nav className='nav-secondary'>
                <div className="img-container">
                    <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                </div>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" className='favorites-heart fa-lg'>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </div>
            </nav>
            <div className='main-content'>

                <div className='side-nav'>
                    <div className='side-nav-links'>

                        <ul className='side'>
                            <li><Link to="/" className='link'>Home</Link></li>
                            <li><Link to="/about" className='link' >About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='main'>
                    <div className="travel-card" onClick={kingsCross}>
                        <img src={kingscross} alt="kings cross station"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Kings Cross Station</div>
                        </div>
                    </div>
                    <div className="travel-card">
                        <img src={kingscross} alt="London"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">London</div>
                        </div>
                    </div>
                    <div className="travel-card">
                        <img src={kingscross} alt="Hogsmeade"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Hogsmede</div>
                        </div>
                    </div>
                    <div className="travel-card">
                        <img src={kingscross} alt="Diagon Alley"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Diagon Alley</div>
                        </div>
                    </div>
                    <div className="travel-card">
                        <img src={kingscross} alt="Hogwarts Express"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Hogwarts Express</div>
                        </div>
                    </div>
                    <div className="travel-card">
                        <img src={kingscross} alt="kings cross station"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Popular;