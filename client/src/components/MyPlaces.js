import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import unnamed from '../Images/unnamed.png';

const MyPlaces = () => {
  const navigate = useNavigate();
  const homeLogo = () => {
    navigate('/');
  };

  const [data, setData] = useState({
    name: '',
    email:'',
    description:''
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/allTripSchema');
  //       setData(response.data);
  //       console.log(response.data.Wizard);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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

  console.log(data);

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
              <div className="photo-grid">
                {data && Array.isArray(data) && 
                  data.map((item) => (
                    <div key={item.id}> 
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  ))}
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
