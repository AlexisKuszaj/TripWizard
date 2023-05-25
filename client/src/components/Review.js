import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Review = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/newTripSchema', {
        name: name,
        email: email,
        description: message,
      });
      console.log(response.data);
      setName('');
      setEmail('');
      setMessage('');
      setError('');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };
  
  return (
    <div>
      <div className="side-nav-form">
        <h4 className="review-text">Where have you been?</h4>
        <p className="review-text">Let us know where<br />and what you thought!</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            minLength="3"
            maxLength="30"
            required
            className="review-input reviewHeight"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            className="review-input reviewHeight"
          />
          <textarea
            id="message"
            name="message"
            rows="7"
            value={message}
            onChange={handleInputChange}
            required
            className="review-input"
            placeholder="Leave a review"
          ></textarea>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-outline-warning">
            Submit
          </button>
        </form>
        <div className="sideNavSpacing">
          <Link to={`/reviews`}>See All Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default Review;
