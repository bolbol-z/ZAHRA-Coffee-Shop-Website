import React from 'react'
import './Footer.css'
import images from '../../assets/assets'

function Footer() {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={images.zahraLogo} alt="" />
        </div>
        <div className="slogon">
            <p>Le café qui réchauffe le cœur</p>
        </div>
        <div className="links">
            <ul>
                <li>À propos</li>
                <li>Accueil</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="line"></div>

        <div className="remarque">
            <span>Ce projet et cette marque ne sont pas réels ; il s'agit uniquement d’un concept. Idée et design réalisés par Bilel Zghal</span>
        </div>
        
        <div className="watermark">
            <span>© 2025 Bilel Zghal . Tous droits réservés.</span>
        </div>
    </div>
  )
}

export default Footer