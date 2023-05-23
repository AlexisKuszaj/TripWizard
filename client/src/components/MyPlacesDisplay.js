
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const MyPlacesDisplay = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axios
  //     .get("http://localhost:8000/api/allTripSchema")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       setData(res.data.Wizard);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
      <div className="side-nav-form-display">
        <div className="photo-grid">
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
        </div>
      </div>
    </div>
  );
};

export default MyPlacesDisplay;
