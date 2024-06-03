
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import image from '/src/assets/Maxai-removebg-preview.png'
import ScrollAnimation from 'react-animate-on-scroll';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header(){
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const setClass = (e) => {
          const target = e.target;
          if (target.className === 'bi bi-list') {
              target.className = 'bi bi-x-lg';
              setIsMenuOpen(true);
          } else {
              target.className = 'bi bi-list';
              setIsMenuOpen(false);
          }
          // Add any other logic or styles you need here
      };
    return(
          <header>
                <nav>
        <div className="logo">Max<span>AI</span> <img src={image} width="40px" alt="" /></div>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/components" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to="/ContactUs" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
          {/* Update other links similarly */}
        </ul>
        <i className='bi bi-list' onClick={(e) => setClass(e)}></i>

        <div className="linkholder placeholder-glow">
          <a href="https://www.maxai.me/?via=munachimso">Download</a>
        </div>
      </nav>
            <div className={`Mobilenav ${isMenuOpen ? 'Mobilenavshow' : 'mobilenavhide'}`}>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/components" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to="/ContactUs" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
              </div>

            <main className=''>
                  < ScrollAnimation animateIn="fadeIn" className='Insight placeholder-glow'>
                     <h1>Empowering productivity with AI (Artificial Intelligence)</h1>
                     <img src={image} width="40px" alt="" />
                  </ ScrollAnimation>

                  <div placeholder-glow>
                        <a href="https://www.maxai.me/?via=munachimso">Get Started</a>
                  </div>
                
      
            </main>
          </header>


    
   ) }
export default Header