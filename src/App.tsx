import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import UserComponent from './components/UserComponent';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hello" element={<UserComponent name='Jack' age={26} address='1390 Adams St' dob={new Date()}/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
