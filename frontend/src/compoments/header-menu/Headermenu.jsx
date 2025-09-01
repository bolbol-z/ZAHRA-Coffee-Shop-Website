import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Headermenu.css';
import images from '../../assets/assets';
import AnimatedText from '../SplitText';

function Headermenu() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='Headermenu'>
            {/* Background video */}
            <video className="video-background" autoPlay loop muted playsInline>
                <source src="/coffee.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Foreground content */}
            <div className="content">
                <div className="header-top">
                    {/* Logo link */}
                    <Link to="/" 
                          onMouseEnter={() => setIsHovered(true)} 
                          onMouseLeave={() => setIsHovered(false)}
                          className={`logo-link ${isHovered ? 'hovered' : ''}`}>
                        <img src="/ZAHRA_LOGO.png" alt="ZAHRA Logo" className="logo" />
                    </Link>
                    
                    {/* Reserve button */}
                    <button className="reserve-button">Réserver</button>
                </div>

                {/* Text with AnimatedText component */}
                <div className="header-text">
                    <AnimatedText text="Offrez-vous plus qu’un café… noffrez-vous un instant de bonheur" className="header-line" />
                </div>
            </div>
        </div>
    );
}

export default Headermenu;