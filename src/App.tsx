import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import UserComponent from './components/UserComponent';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Shop from './components/shop/Shop';

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
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
     </div> 
    </div>
  );
}

export default App;
