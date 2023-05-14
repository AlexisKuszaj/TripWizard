import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "../components/Footer"
import NavBar from '../components/NavBar';
import unnamed from "../Images/unnamed.png"

const MyPlaces = () => {
  const navigate = useNavigate()
  const homeLogo = (e) => {
    navigate('/')
  }
  const [data, setData] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/allTripSchema');
        setData(response.data);
        console.log(response)
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/api/allTripSchema/`)
  //     .then((res) => {
  //       console.log('line 23', res)
  //       console.log('line 24', res.data)
  //       setData(res.data.wizard)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  // const deleteHandler = (e) =>{
  //   e.preventDefault()
  // }

  return (
    <div>


      <div className='popular'>
        <div className='Container container-long'>
          <nav className='nav-secondary'>
            <div className="img-container-other">
              <img className="logo" src={unnamed} alt="Logo" onClick={homeLogo} />
            </div>
          </nav>
          <div className='main-content'>
            <NavBar />
            <div className='main-popular'>

              <h2 className='header'>My Favorites</h2>
              <h2 className='header'>My Places</h2>
              {/* <h1>My Places</h1>
                        <ul>
                        {Array.isArray(data) && data.map((item) => (
                    <li key={item.id}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </li>
                      ))}
                       </ul> */}
              <div className="photo-grid">





              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />


    </div>
  );
};

export default MyPlaces;
