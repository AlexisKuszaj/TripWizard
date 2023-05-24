import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import unnamed from "../Images/unnamed.png"
import NavBar from "./NavBar";
import Footer from "./Footer";

const AllReviews = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [editItemId, setEditItemId] = useState(null);
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const homeLogo = (e) => {
        navigate('/');
    }

    const reviewHandler = () => {
        setIsVisible(!isVisible)
    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`http://localhost:8000/api/allTripSchema`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setData(res.data.Wizard);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteFilter = (id) => {
        axios.delete(`http://localhost:8000/api/deleteTripSchema/${id}`)
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
        setDescription(itemToEdit.description);
    };

    const submitHandler = (id) => {
        const updatedData = data.map((item) => {
            if (item._id === id) {
                return {
                    ...item,
                    name: name,
                    description: description,
                };
            }
            return item;
        });

        axios.put(`http://localhost:8000/api/updateTripSchema/${id}`, {
            name: name,
            description: description
        })
            .then((res) => {
                setData(updatedData);
                setEditItemId(null);
                setName('');
                setDescription('');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
            setName(value);
        } else if (name === "description") {
            setDescription(value);
        }
    };

    const mainSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/newTripSchema', {
            name: name,
            email: email,
            description: message,
        })
            .then((res) => {
                setIsVisible(false)
                setName('');
                setEmail('');
                setMessage('');
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
                           <div className="review-header">
                           <p className="review">Reviews</p>
                            <div className="photo-grid">
                                <button className="review-button" onClick={reviewHandler}>Post a review</button>
                           </div>
                                {isVisible &&
                                    <form className="form2" onSubmit={mainSubmit}>
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
                                        <label htmlFor="message">Tell us your thoughts!</label>
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
                                }
                            </div>
                            <div className='reviews-innerbox'>
                                <div>
                                    <h4>Potter</h4>
                                    <p>I love london so much, reminds me of the films</p>
                                    <hr />
                                </div>
                                <div></div>
                            </div>
                            <div className='reviews-innerbox'>
                                <div>
                                    <h4>Nicole Shafer</h4>
                                    <p>Visiting universal always brings me home</p>
                                    <hr />
                                </div>
                                <div></div>
                            </div>
                            <div className="outerBoxReviews">
                                <div className='reviews-innerbox'>
                                    <div>
                                        <h4>Taylor Smith</h4>
                                        <p>Loved Universal's Harry Potter World so much!!</p>
                                        <hr />
                                    </div>
                                    <div></div>
                                </div>
                                <div className='reviews-innerbox'>
                                    <div>
                                        <h4>Alexis Kuszaj</h4>
                                        <p>The Cauldron is the best</p>
                                        <hr />
                                    </div>
                                    <div></div>
                                </div>
                                <div className='reviews-innerbox'>
                                    <div>
                                        <h4>Potter</h4>
                                        <p>I love London so much, reminds me of the films</p>
                                        <hr />
                                    </div>
                                    <div></div>
                                </div>
                                <div className='reviews-innerbox'>
                                    <div>
                                        <h4>Nicole Shafer</h4>
                                        <p>Visiting Universal always brings me home</p>
                                        <hr />
                                    </div>
                                    <div></div>
                                </div>

                                <div>
                                    <div className="outerBoxReviews">
                                        {data.map((item) => (
                                            <div key={item._id} className="reviews-innerbox">
                                                <div>
                                                    <h4>{item.name}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                                    
                                                <div>
                                                    <button
                                                    className="btn"
                                                     onClick={() => deleteFilter(item._id)}>Delete</button>
                                                    {editItemId === item._id ? (
                                                        <div className="edit-form">
                                                            <label>Name:</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={name}
                                                                onChange={handleInputChange}
                                                                placeholder="Name"
                                                            />
                                                            <label>Review</label>
                                                            <textarea
                                                                type="textarea"
                                                                name="description"
                                                                value={description}
                                                                onChange={handleInputChange}
                                                                placeholder="Description"
                                                            />
                                                            <button 
                                                            className="btn"
                                                            onClick={() => submitHandler(item._id)
                                                            }>Submit</button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                        
                                                        className="btn" onClick={() => handleEdit(item._id)}>Edit</button>

                                                    )}

                                                </div>
                                                <hr />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AllReviews;