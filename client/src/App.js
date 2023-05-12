import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Popular from './components/Popular';
import About from './components/About';
import Contact from './components/Contact';
import Review from './components/Review';
import KingsCross from './places/KingsCross';
import London from './places/London';
import MyPlaces from './components/MyPlaces';


function App() {
  // const [path, setPath] = useState("");




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/popular' element={<Popular />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/review' element={<Review />} />
          <Route path='/myplaces' element={<MyPlaces />} />
          <Route path='/kingscross' element={<KingsCross />} />
          <Route path='/London' element={<London />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
