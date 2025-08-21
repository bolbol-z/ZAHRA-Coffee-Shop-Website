import React, { useState } from 'react';
import './Navbar.css';
import images from '../../assets/assets';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      {/* 1. القائمة على اليسار */}
      <ul className="navbarmenu">
        <li>Menu Principal</li>
        <li>Réserver Maintenant</li>
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

      {/* 2. الشعار في المنتصف */}
      <img src={images.zahraLogo} alt="Logo" className="lgo" />
      
      {/* 3. الزر على اليمين */}
      <div className="navbar-right">
        <button className="rserve">Réserver</button>
      </div>
    </div>
  );
};

export default Navbar;