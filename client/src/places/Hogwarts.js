import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import unnamed from "../Images/unnamed.png"
import { useNavigate } from 'react-router-dom';
import alnwick from "../Images/alnwick.jpg"
import gloucester from "../Images/gloucester.jpg"
import library from "../Images/library.jpg"
import oxford from "../Images/oxford.jpg"

const Hogwarts = () => {
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

                            <h2 className='header'>Hogwarts</h2>
                            <div className="photo-grid">

                                <a href="https://www.alnwickcastle.com/explore/on-screen/harry-potter">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={alnwick} alt="Alnwick Castle" />
                                            <p className='p-london'> <span>Alnwick Castle, England</span> <br />This castle was a big filming location and inspiration for Hogwarts <br /> </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.alnwickcastle.com/explore/on-screen/harry-potter">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={oxford} alt="Oxford University" />
                                            <p className='p-london'> <span>Oxford University</span> <br />You can visit The Great Hall at Christ Church College inside Oxford University <br /> </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.livrarialello.pt/en/home">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={library} alt="Livraria Lello" />
                                            <p className='p-london'> <span>Livraria Lello, Porto, Portugal</span> <br />Quoted as one of the most beautiful bookstores in the world <br />This bookstore was inspiration for the Hogwarts neo-gothic library aesthetic </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://gloucestercathedral.org.uk/">
                                    <div className='overlay-link'>
                                        <div className='popular-main-content'>
                                            <img className='img-hover photo-grid-item' src={gloucester} alt="Glucester Cathedral" />
                                            <p className='p-london'> <span>
                                                Gloucester Cathedral</span> <br /> These Cathedral hallways are seen throughout the film many times as  <br />as Gryffindors head to their common room. This is also the filming location when they learn the Chamber of Secrets has been opened. </p>
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

export default Hogwarts;
