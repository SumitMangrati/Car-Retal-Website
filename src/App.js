
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import CarsSlide from './components/CarsSlide';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Hero/>
        <CarsSlide/>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
