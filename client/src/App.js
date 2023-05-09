import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Popular from './components/Popular';

function App() {
// const [path, setPath] = useState("");




  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path='/popular' element={<Popular/>}/>
     <Route path='/' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
