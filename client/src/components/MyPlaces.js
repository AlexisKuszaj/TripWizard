import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import axios from 'axios';

const MyPlaces = () => {
  const [data, setData] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/allTripSchema');
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Places</h1>
      <ul>
      {Array.isArray(data) && data.map((item) => (
  <li key={item.id}>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
  </li>
))}

      </ul>
    </div>
  );
};

export default MyPlaces;
