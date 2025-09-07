import React, { useState } from 'react';
import './Navbar.css';
import images from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onContactClick }) => { // إضافة onContactClick كـ prop
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservation');
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <div className='navbar'>
      <ul className="navbarmenu">
        <Link to="/menu" className="nav-link">
          <li>Menu Principal</li>
        </Link>
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
              <li onClick={handleContactClick}>Contactez-Nous</li> {/* استدعاء الدالة */}
              <li>Promotions Spéciales</li>
              <Link to="/besoin" className="nav-link">
                <li>Nos Boissons</li>
              </Link>
            </ul>
          )}
        </li>
      </ul>
      <Link to="/">
        <img src={images.zahraLogo} alt="Logo" className="lgo" />
      </Link>
      <div className="navbar-right">
        <button className="reserve" onClick={handleReserveClick}>Réserver</button>
      </div>
    </div>
  );
};

export default Navbar;