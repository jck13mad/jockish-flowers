import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
     </Routes>
    </div>
  );
}

export default App;
