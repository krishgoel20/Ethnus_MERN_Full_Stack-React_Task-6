import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Education">Education</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
          <li><Link to="/Languages">Languages</Link></li>
          <li><Link to="/Experience">Experience</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Certifications">Certifications</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;