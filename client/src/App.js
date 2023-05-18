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
import Hogsmeade from './places/Hogsmeade';
import DiagonAlley from './places/DiagonAlley'
import HogwartsExpress from "./places/HogwartsExpress"
import Hogwarts from './places/Hogwarts';
import UK from './places/UK';
import MyPlacesDisplay from './components/MyPlacesDisplay';

function App() {
  // const [path, setPath] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<Route path='/contact' element={<Contact />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/review' element={<Review />} />
          <Route path='MyPlacesDisplay' element={<MyPlacesDisplay/>}/>
          <Route path='/myplaces' element={<MyPlaces />} />
          <Route path='/kingscross' element={<KingsCross />} />
          <Route path='/London' element={<London />} />
          <Route path='/hogsmeade' element={<Hogsmeade/>}/>
          <Route path='diagonalley' element={<DiagonAlley/>}/>
          <Route path='hogwartsexpress' element={<HogwartsExpress/>}/>
          <Route path='hogwarts' element={<Hogwarts/>}/>
          <Route path='uk-locations' element={<UK/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;




