import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favoroite from './Pages/Favoroite';
import Details from './Pages/Details';



const App = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/favourite' element={<Favoroite />} />
        <Route path='/recipe-item/:id' element={<Details />} />  {/*dynamic path*/ }
      </Routes>
    </div>
  );
}

export default App;
