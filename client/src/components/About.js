import React from 'react';
import unnamed from '../Images/unnamed.png'
import { Link , useNavigate} from 'react-router-dom'

const About = () => {
    const navigate= useNavigate()

    const homeLogo = (e) => {
      navigate('/')
    }


    return (
        <div>
            <div className='popular'>

                <nav className='nav-secondary'>
                    <div className="img-container">
                        <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
                    </div>
                </nav>
                <div className='main-content'>

                    <div className='side-nav'>
                        <div className='side-nav-links'>

                            <ul className='side'>
                                <li><Link to="/" className='link'>Home</Link></li>
                                <li><Link to='/about' className='link'>About</Link></li>
                                <li><Link to='/contact' className='link'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='main'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
