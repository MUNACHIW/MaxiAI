import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.jsx';
import 'bootstrap/dist/js/bootstrap.min.js';
import AboutMax from './Components/AboutMax.jsx';
import Max from './Components/Max.jsx';
import Components from './Components/Components.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Components/Home.jsx';
import ContactUs from './Components/Contact_us.jsx';

function App() {
  return (
    <Router>
  
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} /> {/* Home route */}
        <Route path="/about" element={<AboutMax/>} />
        <Route path="/max" element={<Max/>} />
        <Route path="/components" element={<Components/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        {/* Add other routes here */}
      </Routes>
    
      <Footer/>
    </Router>
  );
}



export default App;
