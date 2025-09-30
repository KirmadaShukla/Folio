import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faLinkedinIn, faGithub,faHackerrank  } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleNavClick = (sectionId) => {
    setIsActive(false); // Close the mobile menu
    
    // Scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
     <div className="cursor-1"></div>
      <div className="cursor-2"></div>
      <div className={`menu-bar ${isActive ? 'active' : ''}`} id="menu-bars" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isActive ? faTimes : faBars} />
      </div>
      <header className={`glass-effect ${isActive ? 'active' : ''}`}>
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="#home" className='a' onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
          <a href="#about" className='a' onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
          <a href="#experience" className='a' onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a>
          <a href="#projects" className='a' onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
          <a href="#contact" className='a' onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
        </nav>

        <div className={`follow ${isActive ? 'active' : ''}`}>
          <a href="https://www.instagram.com/kir___mada/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className='a' /> </a>
          <a href="https://www.linkedin.com/in/pranjal-shukla-897967221/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className='a'/> </a>
          <a href="https://github.com/KirmadaShukla/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='a'/> </a>
        </div>
      </header>
      
      <style jsx>{`
        .glass-effect {
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .navbar.active a {
          color: white;
        }
      `}</style>
    </>
  );
};

export default Navbar;