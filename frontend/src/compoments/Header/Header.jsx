import React from 'react'
import './Header.css'
import images from '../../assets/assets'

function Header() {
  return (
    <div className='header'>
        <div className="hero-text">
            <h2>Découvrez l'histoire derrière <br /> chaque tasse de café</h2>
        </div>
        <div className="bg">
            <div className="animation-bg">
                <img src={images.bg} alt="" />
            </div>
            <div className="hero-bg">
                <img src={images.IMG_2430} alt="" />
            </div>
        </div>
        <div className="hero-desc">
            <p>Plongez dans une ambiance chaleureuse où tradition et innovation se rencontrent. <br />Chaque gorgée vous transporte au cœur de notre héritage méditerranéen.</p>
        </div>
        <div className="action-button">
            <button className="command">Commander</button>
            <button className="reserve">Réserver</button>
        </div>
      
    </div>
  )
}

export default Header
