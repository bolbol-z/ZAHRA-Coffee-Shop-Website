import React, { useState } from 'react';
import './Navbar.css';
import images from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
     
      <ul className="navbarmenu">
        <Link to="/menu" className="nav-link">
          <li>Menu Principal</li>
        </Link>
        {/* إضافة Link للعنصر */}
        <Link to="/reservation" className="nav-link">
          <li>Réserver Maintenant</li>
        </Link>
        <li className="dropdown-toggle">
          <span>À Propos</span>
          <img
            src={images.downarrow}
            alt="Dropdown"
            className="dropdown-icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>Contactez-Nous</li>
              <li>Promotions Spéciales</li>
              <li>Nos Boissons</li>
            </ul>
          )}
        </li>
      </ul>

    
      <Link to="/">
        <img src={images.zahraLogo} alt="Logo" className="lgo" />
      </Link>
      

      <div className="navbar-right">
        <button className="rserve">Réserver</button>
      </div>
    </div>
  );
};

export default Navbar;