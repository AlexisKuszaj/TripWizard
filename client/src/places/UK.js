import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import unnamed from "../Images/unnamed.png"
import { useNavigate } from 'react-router-dom';

const UK = () => {
    const navigate = useNavigate()
    const homeLogo = () => {
        navigate('/')
    }
    return (
        <div>
            <div className='popular'>
                <div className='Container container-long'>
                    <nav className='nav-secondary'>
                        <div className="img-container-other">
                            <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                        </div>
                    </nav>
                    <div className='main-content'>
                        <NavBar />
                        <div className='main-popular'>

                            <h2 className='header'>United Kingdom</h2>
                            <div className="photo-grid">

                                <a href="https://thecauldron.io/london?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzD-pOmvp_78jRtujW1ERzdOTj0bfHsSz65xW8tE1d6StswiPTK3V44aAvd1EALw_wcB">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={unnamed} alt="img1" />
                                            <p className='p-london'> <span>The Cauldron Co.</span> <br />Test your potion skills at Londons emersive cocktail class. <br /> Throw on your cloak, wield your wand, and brew drinkable elixers.</p>
                                        </div>
                                    </div>
                                </a>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UK;
