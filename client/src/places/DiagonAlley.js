import React, {useState} from 'react';
import unnamed from '../Images/unnamed.png'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import leadenhall from "../Images/Leadenhall-m.jpg"
import diagon from "../Images/diagon.jpg"
import Footer from '../components/Footer';




const DiagonAlley = () => {
    const [likedItems, setLikedItems] = useState([]);
    const navigate = useNavigate()
    const homeLogo = (e) => {
        navigate('/')
    }

    const handleLike = (item) => {
    setLikedItems([...likedItems, item]);
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
                    <h2 className='header'>Diagon Alley</h2>
                        <div className="photo-grid">
                            <a href="https://leadenhallmarket.co.uk/">
                                <div className='overlay-link'>
                                    <div className='popular-main-content'>
                                        <img className='img-hover photo-grid-item' src={leadenhall} alt="img1" />
                                        <p className='p-london'> <span>Leadenhall Market</span> <br />Another London location, this market was used for the setting of Diagon Alley and the Leaky Cauldron.</p>
                                       
                                    </div>
                                </div>
                            </a>

                            <a href='https://www.universalorlando.com/web/en/us/theme-parks/universal-studios-florida/the-wizarding-world-of-harry-potter-diagon-alley'>
                                <div className='popular-main-content'>
                                    <img className='img-hover photo-grid-item' src={diagon} alt="img2" />
                                    <p className='p-london'> <span>Diagon Alley Universal Orlando</span> <br />Grab your magic wands! <br />Step into the fun at Universal Studios where you can shop in Diagon Alley, visit Gringotts, grab food at the Leaky Cauldron and so much more! </p>
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

export default DiagonAlley;
