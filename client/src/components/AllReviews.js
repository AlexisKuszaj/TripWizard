import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import unnamed from "../Images/unnamed.png"
import NavBar from "./NavBar";

const AllReviews = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    // const { _id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [editItemId, setEditItemId] = useState(null);
    const [message, setMessage] = useState('');
    const homeLogo = (e) => {
        navigate('/')
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allTripSchema`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
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
                    description: description,

                };
            }
            return item;
        });


        axios
            .put(`http://localhost:8000/api/updateTripSchema/${id}`, {
                name: name,
                email: email,
                description: description
                // name,
                // email,
                // description
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



    // const mainSubmit = (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = axios.post('http://localhost:8000/api/newTripSchema', {
    //             name: name,
    //             email: email,
    //             description: message,
    //         });
    //         console.log(response.data);
    //         setData([...data, data]);
    //         setName('');
    //         setEmail('');
    //         setMessage('');
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    const mainSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/newTripSchema',
            {
                name: name,
                email: email,
                description: message,
            })
            .then((res) => {
                console.log(res.data)
                setData([...data, res.data]);
                setName('');
                setEmail('');
                setDescription('');
            })
            .catch((err) => {
                console.log(err)
            })
    }

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
                            <h2 className='header'>Reviews</h2>
                            <div className="photo-grid">
                                <form className="form" onSubmit={mainSubmit}>
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
                                <div>
                                    <hr />
                                </div>
                                <div>
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


                                        {/* {data &&
                                        Array.isArray(data) && */}
                                        {data.map((items) => (
                                            <div key={items._id} className="reviews">
                                                <div className="review">
                                                    <h4>{items.name}</h4>
                                                    <p>{items.description}</p>
                                                </div>
                                                <div className="reviewButtons">
                                                    <button onClick={() => deleteFilter(items._id)}>Delete</button>
                                                    {editItemId === items._id ? (
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
                                                            <button onClick={() => submitHandler(items._id)}>Submit</button >                 </div>
                                                    ) : (
                                                        <button onClick={() => handleEdit(items._id)}>Edit</button>
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
        </div>
    );
}

export default AllReviews;


