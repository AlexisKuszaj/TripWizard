import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import unnamed from '../Images/unnamed.png'
import Popular from './Popular';


const Review = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}\nMessage: ${message}`);
        // You can add your own form submission logic here
    };

    return (
        <div >
            <div className="main-content">
                <div className="side-nav-form">
                    <div className="form">
                        <h4>Where Have you been?</h4>
                        <p>Let us know where and <br /> what you thought!</p>
                        <form className='form' onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                minLength="3"
                                maxLength="30"
                                required
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={message}
                                onChange={handleMessageChange}
                                required
                            ></textarea>
                            <button className="submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;








//       event.preventDefault();
//       console.log(`Email: ${email}\nMessage: ${message}`);
//     };
//     // const navigate = useNavigate()

//     // const homeLogo = (e) => {
//     //     navigate('/')
//     // }

//     return (
//         <div className='side'>

//         <div>
//             <div className='popular'>

//                 {/* <nav className='nav-secondary'>
//                     <div className="img-container">
//                         <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
//                     </div>
//                 </nav> */}
//                 <div className='main-content'>

//                     <div className='side-nav'>
//                         <div className='side-nav-links'>

//                             <ul className='side'>
//                                 <li><Link to="/" className='link'>Home</Link></li>
//                                 <li><Link to='/about' className='link'>About</Link></li>
//                                 <li><Link to='/contact' className='link'>Contact</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className='main'>
//                         <form className='form'>
//                             <label>Leave a Review</label>
//                             <br/>
//                             <label>First Name:</label>
//                             <input type='text'></input>
//                             <br/>
//                             <label>Last Name:</label>
//                             <input type='text'></input>
//                             <br />
//                             <label>Email:</label>
//                             <input type='text'></input>
//                             <br />
//                             <label>Review:</label>
//                             <textarea></textarea>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Review;
