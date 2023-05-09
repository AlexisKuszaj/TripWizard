import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import unnamed from '../Images/unnamed.png'

const Review = () => {
    const navigate = useNavigate()

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
                        <form className='form'>
                            <label>Leave a Review</label>
                            <br/>
                            <label>First Name:</label>
                            <input type='text'></input>
                            <br/>
                            <label>Last Name:</label>
                            <input type='text'></input>
                            <br />
                            <label>Email:</label>
                            <input type='text'></input>
                            <br />
                            <label>Review:</label>
                            <textarea></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
