
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// const Review = ({ onEdit, onDelete }) => {
  const Review = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [editItemId, setEditItemId] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/allTripSchema`)
        .then((res) => {
            console.log( res)
            console.log( res.data)
            setData(res.data.Wizard)
        })
        .catch((err) => {
            console.log(err)
        })
}, [])

const deleteFilter = (id) => {
  axios
    .delete(`http://localhost:8000/api/deleteTripSchema/${id}`)
    .then((res) => {
      setData(data.filter((item) => item._id !== id));
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleEdit = (id) => {
  setEditItemId(id);
  const itemToEdit = data.find((item) => item._id === id);
  setName(itemToEdit.name);
  setEmail(itemToEdit.email);
  setDescription(itemToEdit.description);
};

const submitHandler = (id) => {
  const updatedData = data.map((item) => {
    if (item._id === id) {
      return {
        ...item,
        name: name,
        email: email,
        description: description
      };
    }
    return item;
  });
  
  axios
    .put(`http://localhost:8000/api/updateTripSchema/${id}`, {
      name: name,
      email: email,
      description: description
    })
    .then((res) => {
      setData(updatedData);
      setName('');
      setEmail('');
      setDescription('');
      setEditItemId(null);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  if (name === "name") {
    setName(value);
  } else if (name === "email") {
    setEmail(value);
  } else if (name === "description") {
    setDescription(value);
  }
};
  return (
    <div>
      <div className="side-nav-form">
      <h4>Where Have you been?</h4>
      <p>Let us know where<br/>and what you thought!</p>
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
        <label htmlFor="message">Review:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <div className='sideNavSpacing'>
      <Link to={`/reviews`}>See All Reviews</Link>
      </div>
      

      {/* <div className='sideNavReviews'>
      {data &&
            Array.isArray(data) &&
            data.map((item) => (
              <div key={item._id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button onClick={() => deleteFilter(item._id)}>Delete</button>
                {editItemId === item._id ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="description"
                      value={description}
                      onChange={handleInputChange}
                      placeholder="Description"
                    />
                    <button onClick={() => submitHandler(item._id)}>Submit</button >                 </div>
                ) : (
                  <button onClick={() => handleEdit(item._id)}>Edit</button>
                )}
              </div>
            ))}
      </div> */}
    </div>
    </div>
  );
};

export default Review;
