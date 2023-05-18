import React, { useState, useEffect } from "react";
import axios from "axios";


const MyPlacesDisplay = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/allTripSchema")
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setData(res.data.Wizard);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const handleDelete = (id) => {
      axios
        .delete(`http://localhost:8000/api/deleteTripSchema/${id}`)
        .then((res) => {
          console.log(res);
          const updatedData = data.filter((item) => item.id !== id);
          setData(updatedData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const handleEdit = (id) => {
      console.log("Edit clicked for ID:", id);
    };
  
    return (
      <div>
        <div className="side-nav-form-display">
          <div className="photo-grid">
            {data &&
              Array.isArray(data) &&
              data.map((item) => (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MyPlacesDisplay