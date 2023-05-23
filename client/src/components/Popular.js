import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home';
import unnamed from '../Images/unnamed.png'
import kingscross from '../Images/kingsCross.jpg'
import LondonPic from '../Images/LondonPic.jpg';
import NavBar from './NavBar';
import Review from './Review';
import Footer from './Footer';
import train from "../Images/HogwartsExpress.jpg"
import hogsmeade from "../Images/hogs.jpg"
import dalley from "../Images/d-alley.jpg"
import MyPlacesDisplay from './MyPlacesDisplay';

// import Home from './Home';

const Popular = () => {
    const navigate = useNavigate()

    const homeLogo = (e) => {
        navigate('/')
    }

    const London = (e) => {
        navigate("/London")
    }

    const Hogsmeade = (e) => {
        navigate('/hogsmeade')
    }
    const DiagonAlley = (e) => {
        navigate('/diagonalley')
    }
    const HogwartsExpress = (e) => {
        navigate('/hogwartsexpress')
    }
    const UK = (e) => {
        navigate('/uk-locations')
    }
    const Hogwarts = (e) => {
        navigate('/hogwarts')
    }
    return (
        <div className='popular'>

            <nav className='nav-secondary'>
                <div className="img-container-other">
                    <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                </div>
            </nav>
            <div className='main-content'>
                <div className='side-bars'>
                    <NavBar />
                    <Review />
                    {/* <MyPlacesDisplay/> */}
                </div>



                <div className='main'>
                    <div className="travel-card" onClick={London}>
                        <img src={LondonPic} alt="London"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">London</div>
                        </div>
                    </div>
                    <div className="travel-card" onClick={HogwartsExpress}>
                        <img src={train} alt="Hogwarts Express"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Hogwarts Express</div>
                        </div>
                    </div>

                    <div className="travel-card" onClick={Hogsmeade}>
                        <img src={hogsmeade} alt="Hogsmeade"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Hogsmeade</div>
                        </div>
                    </div>
                    <div className="travel-card" onClick={DiagonAlley}>
                        <img src={dalley} alt="Diagon Alley"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Diagon Alley</div>
                        </div>
                    </div>
                    <div className="travel-card" onClick={Hogwarts}>
                        <img src={kingscross} alt="Hogwarts"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">Hogwarts</div>
                        </div>
                    </div>
                    <div className="travel-card" onClick={UK}>
                        <img src={kingscross} alt="United Kingom"
                            className="photo-card"></img>
                        <div className='info-section'>
                            <div className="name">United Kingdom</div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Popular;