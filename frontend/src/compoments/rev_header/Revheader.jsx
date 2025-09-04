import React from 'react';
import './Revheader.css';
import images from '../../assets/assets';
import AnimatedText from '../../compoments/SplitText'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Revheader() {
  const navigate = useNavigate();

  const handleCommandClick = () => {
    navigate('/menu');
  };

  return (
    <div className='rev-header'>
      <div className='header-background-image'>
        {/* Logo at the top left */}
        <Link to="/">
          <img src={images.zahraLogo} alt="Zahra Logo" className="header-logo" />
        </Link>
        
        {/* Animated text in the center */}
        <div className="header-text-container">
          <AnimatedText 
            // تم تصحيح الخطأ هنا لاستخدام \n بدلاً من n
            text="Réservez plus qu’une table… nréservez un souvenir." 
            className="rev-header-text" 
          />
        </div>
        
        {/* 'Commander' button at the top right */}
        <button className="commander-button" onClick={handleCommandClick}>
          Commander
        </button>
      </div>
    </div>
  );
}

export default Revheader;