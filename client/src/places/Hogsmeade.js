import React from 'react';
import unnamed from "../Images/unnamed.png"
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import hogsmeade from "../Images/hogsmeade.jpg"
import universal from "../Images/hogsmeade-universal.jpg"
import honeydukes from "../Images/honeydukes.jpg"
import Footer from '../components/Footer';

const Hogsmeade = () => {
    const navigate = useNavigate()
    const homeLogo = (e) => {
        navigate('/')

    }

    
    return (
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
                    <h2 className='header'>Hogsmeade</h2>
                        <div className="photo-grid">
                            <a href="https://www.nymr.co.uk/pages/category/goathland-station">
                                <div className='overlay-link'>
                                    <div className='popular-main-content'>
                                        <img className='img-hover photo-grid-item' src={hogsmeade} alt="img1" />
                                        <p className='p-london'> <span>Goathland Train Station, Yorkshire UK</span> <br />A must-see is the celebrity station which became Hogsmeade Station in the first Harry Potter film.</p>
                                    </div>
                                </div>
                            </a>
                            <a href='https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure/the-wizarding-world-of-harry-potter-hogsmeade'>
                                <div className='popular-main-content'>
                                    <img className='img-hover photo-grid-item' src={universal} alt="img2" />
                                    <p className='p-london'> <span>Hogsmeade Universal Orlando</span> <br />A true Hogsmeade Experience <br />Step into the fun at Universal Studios where you can sip on Butterbeer, visit Olivanders Wand Shop and more!</p>
                                </div>
                            </a>
                            <a href='https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure/the-wizarding-world-of-harry-potter-hogsmeade'>
                                <div className='popular-main-content'>
                                    <img className='img-hover photo-grid-item' src={honeydukes} alt="img2" />
                                    <p className='p-london'> <span>Honeydukes</span><br/> Enjoy all the sweets and treats when you visit Honeydukes!</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default Hogsmeade;
