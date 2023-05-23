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

                            <div className="photo-grid">
                            <h2 className='header'>About Us</h2>

                            <div className="about-us-text">
                                                <p>
                                                    Welcome to Our Trip Wizard Travel, your ultimate guide to exploring the magical world of Harry Potter! Our website is dedicated to creating unforgettable adventures inspired by the enchanting tales of J.K. Rowling's wizarding world.
                                                    Whether you're a devoted Potterhead or a curious Muggle looking to experience the wonders of the wizarding realm, Our Trip Wizard Travel is here to make your dreams come true. 
                                                    At Our Trip Wizard Travel, we understand the magic lies in the details. From visiting iconic locations featured in the films to experiencing authentic wizarding activities, we strive to provide an immersive and awe-inspiring journey for fans of all ages.
                                                    Whether you're dreaming of wandering through Diagon Alley, sipping butterbeer in Hogsmeade, or attending a magical class at Hogwarts School of Witchcraft and Wizardry, Let us be your guide to a truly magical adventure!
                                                    </p>
                                                
                                            </div>
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
