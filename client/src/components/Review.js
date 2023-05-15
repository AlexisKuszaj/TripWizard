import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Review = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/newTripSchema', {
        name: name,
        email: email,
        description: message,
      });
      console.log(response)
      console.log(response.data)
      console.log('Response:', response.data);
      setName('');
      setEmail('');
      setMessage('');
      navigate("/myplaces")
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div>
      <div className="main-content">
        <div className="side-nav-form">
          <div className="form">
            <h4>Where Have you been?</h4>
            <p>Let us know where and what you thought!</p>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button className="submit" type="submit" >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
