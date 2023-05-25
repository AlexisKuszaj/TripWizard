import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import unnamed from '../Images/unnamed.png'
import Cauldron from '../Images/Cauldron.jpg'
import cursed from '../Images/cursed.jpg'
import hotel from '../Images/hotel.jpg'
import Leadenhall from '../Images/Leadenhall.jpg'
import StudioTour from '../Images/StudioTour.jpg'
import walkingtour from '../Images/walkingtour.jpg'
import photographicexhibition from '../Images/photographicexhibition.jpg'
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer';



const London = () => {
    const navigate = useNavigate()

    const homeLogo = (e) => {
        navigate('/')

    }
    return (
        <div className='Container'>
            <nav className='nav-secondary'>
                <div className="img-container-other">
                    <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                </div>
            </nav>
            <div className='main-content'>
                <NavBar />
                <div className='main-popular'>
                    <h2 className='header'>London</h2>
                    <div className="photo-grid">
                        <a href="https://thecauldron.io/london?gclid=Cj0KCQjwpPKiBhDvARIsACn-gzD-pOmvp_78jRtujW1ERzdOTj0bfHsSz65xW8tE1d6StswiPTK3V44aAvd1EALw_wcB">
                            <div className='overlay-link'>
                                <div className='popular-main-content'>
                                    <img className='img-hover photo-grid-item' src={Cauldron} alt="img1" />
                                    <p className='p-london'> <span>The Cauldron Co.</span> <br />Test your potion skills at Londons emersive cocktail class. <br /> Throw on your cloak, wield your wand, and brew drinkable elixers.</p>
                                </div>
                            </div>
                        </a>
                        <a href='https://uk.harrypottertheplay.com/?gad=1&gclid=Cj0KCQjwpPKiBhDvARIsACn-gzCoL3jM1yju3t9zjwuk-Fu2qXETKKorvxQoPlYD7JQPsRoCe3SirdYaAnktEALw_wcB'>
                            <div className='popular-main-content'>
                                <img className='img-hover photo-grid-item' src={cursed} alt="img2" />
                                <p className='p-london'> <span>Harry Potter and the Cursed Child Play</span> <br />Are you a theater lover? <br />Then you are going to love this live performance of Harry Potter and the Cursed Child. The most awarded new play in history of the Olivier awards, you dont want to miss it!</p>
                            </div>
                        </a>
                        <a href='https://georgianhousehotel.co.uk/wizard-experiences/'>
                            <div className='popular-main-content'>
                                <img className='img-hover photo-grid-item' src={hotel} alt="img3" />
                                <p className='p-london'><span>Georgian House Wizard Experience</span> <br />Sleep like a wizard! Pass through a portrait-lined passageway, each room features faux castle details such as stained glass windows, stone walls, archways, trunks and much more for an emersive experience! </p>
                            </div>
                        </a>
                        <a href='https://freetoursbyfoot.com/harry-potter-in-leadenhall-market/'>

                            <div className='popular-main-content'>
                                <img className='img-hover photo-grid-item' src={Leadenhall} alt="img4" />
                                <p className='p-london' ><span>Leadenhall Market</span> <br />Walk the path of Harry and Hagrid at Leadenhall Market. <br />Its beautifully covered pathways stood in for Diagon Alley in the first Harry Potter Film</p>
                            </div>
                        </a>
                        <a href='https://www.wbstudiotour.co.uk/?ds_rl=1295575&gclsrc=aw.ds'>
                            <div className='popular-main-content'>
                                <img className='img-hover photo-grid-item' src={StudioTour} alt="img5" />
                                <p className='p-london'><span>Warner Bros. The Making Of Harry Potter Studio Tour </span> <br />Dive deep into the world of the making of Harry Potter.  You'll see Sets, props, costumes and more on The Making Of Harry Potter Tour. </p>
                            </div>
                        </a>
                        <a href='https://strawberrytours.com/london/tours/free-harry-potter-tour'>
                            <div className='popular-main-content'>
                                <img className='img-hover photo-grid-item' src={walkingtour} alt="img6" />
                                <p className='p-london'><span>Free Harry Potter Walking Tour</span> <br />A 2.5-3 hour long walking tour Some of the stops include Kings Cross Station, <br /> 12 Grimmauld Place, and the sites used for the Leaky Cauldron. There is also an opportunity at the end of the tour to buy Harry Potter merchandise. </p>
                            </div>
                        </a>
                        <a href='https://www.wizardingworld.com/discover/experiences/harry-potter-photographic-exhibition'>
                            <div className='popular-main-content'>
                                <img className='img-hover photo-grid-item' src={photographicexhibition} alt="img5" />
                                <p className='p-london'><span>The Harry Potter Photographic Exhibition</span> <br />Journey through memories captured during years of magical filmmaking in a display of iconic behind-the-scenes images, never before seen in one place.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default London