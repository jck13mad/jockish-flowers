import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import UserComponent from './components/UserComponent';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Services from './components/services/Services';
import data from './data';

function App() {
  return (
    <div className=''>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className='z-1'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hello" element={<UserComponent name='Jack' age={26} address='1390 Adams St' dob={new Date()}/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services flowers={data[0]}/>}></Route>

          <Route path="/services/arrangements" element={<Services flowers={data[0]} />}></Route>
          <Route path="/services/arrangements/floral" element={<Services flowers={data[1]} />}></Route>
          <Route path="/services/arrangements/greenery" element={<Services flowers={data[2]} />}></Route>
          <Route path="/services/arrangements/sympathy" element={<Services flowers={data[3]} />}></Route>
          <Route path="/services/arrangements/figurine" element={<Services flowers={data[4]} />}></Route>

          <Route path="/services/stonework" element={<Services flowers={data[5]} />}></Route>
          <Route path="/services/stonework/statues" element={<Services flowers={data[6]} />}></Route>
          <Route path="/services/stonework/benches" element={<Services flowers={data[7]} />}></Route>
          <Route path="/services/plaques" element={<Services flowers={data[8]} />}></Route>

          <Route path="/services/accents" element={<Services flowers={data[9]} />}></Route>
          <Route path="/services/afgans" element={<Services flowers={data[10]} />}></Route>
        </Routes>
     </div> 
    </div>
  );
}

export default App;
