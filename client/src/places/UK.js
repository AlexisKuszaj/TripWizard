import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import unnamed from "../Images/unnamed.png"
import { useNavigate } from 'react-router-dom';
import loch from "../Images/lochArkaig.jpg"
import clachaig from "../Images/clachaig.jpg"
import moor from "../Images/mor.jpg"
import edinburgh from "../Images/edinburgh.jpg"

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

                            <h2 className='header'>Other Locations</h2>
                            <div className="photo-grid">

                                <a href="https://thecauldron.io/london?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzD-pOmvp_78jRtujW1ERzdOTj0bfHsSz65xW8tE1d6StswiPTK3V44aAvd1EALw_wcB">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={loch} alt="img1" />
                                            <p className='p-london'> <span>Loch Arkaig - The Scottish Highlands</span> <br/> This Loch located in the Highlands of Scotland is the filming location for mulitple scenes including during the Tri-Wizard Tornament at the Black Lake.   <br />
                                            <br/>Loch Arkaig is the final resting place for Dumbledore.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://thecauldron.io/london?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzD-pOmvp_78jRtujW1ERzdOTj0bfHsSz65xW8tE1d6StswiPTK3V44aAvd1EALw_wcB">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={clachaig} alt="img1" />
                                            <p className='p-london'> <span>Clachaig Gully at Glencoe</span><br/> A must see for all Harry Potter lovers, Inn is where all the exterior shots for Hagrids hut were filmed.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://thecauldron.io/london?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzD-pOmvp_78jRtujW1ERzdOTj0bfHsSz65xW8tE1d6StswiPTK3V44aAvd1EALw_wcB">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={edinburgh} alt="img1" />
                                            <p className='p-london'> <span>Edinburgh</span><br/> While not an actual filming location, Edinburgh is truly the birthplace of Harry Potter. If you didn't know, Rowling was living in Edinburgh and wrote some of the very first chapters at cafes in Edinburgh. <br/> This is the very beginning of the Magical World that we know today.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://thecauldron.io/london?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzD-pOmvp_78jRtujW1ERzdOTj0bfHsSz65xW8tE1d6StswiPTK3V44aAvd1EALw_wcB">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={moor} alt="img1" />
                                            <p className='p-london'> <span>Rannoch Moor</span><br/> The boggy landscape is briefly seen in Harry Potter and the Deathly Hallows Part 1. </p>
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
