import React from 'react';
import unnamed from '../Images/unnamed.png'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


const About = () => {
    const navigate = useNavigate()

    const homeLogo = (e) => {
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

                            <h2 className='header'>About Us</h2>
                            <div className="photo-grid">

                                We are cool, hire us



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
