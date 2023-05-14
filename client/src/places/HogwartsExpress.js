import React from 'react';
import unnamed from '../Images/unnamed.png'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import train from '../Images/train.jpg'
import train2 from "../Images/train-universal.jpg"
import hogwartsexpress from "../Images/h-express.jpg"
import KingsCross from '../Images/kingsCross.jpg';
import Footer from '../components/Footer';


const HogwartsExpress = () => {
    const navigate = useNavigate()
    const homeLogo = (e) => {
        navigate('/')

    }
    return (
<div>
            <div>
            <div className='Container container-long'>
                <nav className='nav-secondary'>
                    <div className="img-container-other">
                        <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                    </div>
                </nav>
                <div className='main-content'>
                    <NavBar />
                    <div className='main-popular'>
                    <h2 className='header'>Hogwarts Express</h2>
                        <div className="photo-grid">
                            <a href="https://leadenhallmarket.co.uk/">
                                <div className='overlay-link'>
                                    <div className='popular-main-content'>
                                        <img className='img-hover photo-grid-item' src={KingsCross} alt="img1" />
                                        <p className='p-london'> <span>Kings Cross Station</span> <br />In the real King’s Cross Station, platforms 9 and 10 are separated by tracks, 
                        but you can find a platform 9¾ on the wall in the station concourse.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://leadenhallmarket.co.uk/">
                                <div className='overlay-link'>
                                    <div className='popular-main-content'>
                                        <img className='img-hover photo-grid-item' src={train} alt="img1" />
                                        <p className='p-london'> <span>Scotland</span> <br />You can see the Hogwarts Express train in Scotland by Fort William and Glenfinnan in the Lochaber area of the west Scottish Highlands.</p>
                                    </div>
                                </div>
                            </a>
                            <a href='https://www.universalorlando.com/web/en/us/theme-parks/universal-studios-florida/the-wizarding-world-of-harry-potter-diagon-alley'>
                                <div className='popular-main-content'>
                                    <img className='img-hover photo-grid-item' src={hogwartsexpress} alt="img2" />
                                    <p className='p-london'> <span>Hogwarts Express at Universal Orlando</span> <br />Take a journey with this ride attraction that will take you in betweent Diagon Alley and Hogsmeade at Universal Orlando </p>
                                </div>
                            </a>
                            <a href='https://www.universalorlando.com/web/en/us/theme-parks/universal-studios-florida/the-wizarding-world-of-harry-potter-diagon-alley'>
                                <div className='popular-main-content'>
                                    <img className='img-hover photo-grid-item' src={train2} alt="img2" />
                                    <p className='p-london'> <span>Platform 9 3/4</span> <br />Come visit the iconic King's Cross Station! In the Movie 1 -
                        Harry Potter and the Sorcerers Stone, Harry and his friends dash through a brick wall between 
                        platforms 9 and 10. </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>




        </div>
        <Footer/>
        </div>
    );
}

export default HogwartsExpress;
