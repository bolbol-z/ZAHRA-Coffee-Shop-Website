import React from 'react'
import './Contact.css'
import images from '../../assets/assets'

function Contact() {
  return (
    <div className='contact'>
        <div className="title">
            <h2 className="T1">Besoin d’aide ou envie d’échanger avec nous ?</h2>
        </div>
        <div className="desc">
            <p>Notre équipe est à votre écoute pour répondre à vos questions, vous guider dans vos commandesou vos <br/>réservations.</p>
        </div>
        <div className="contact-info">
          
            <div className="mail">
                <h3 className='T2'>Écrivez-nous</h3>
                <div className="mail-input">
                    <input type="text" placeholder='Votre adresse mail' />
                    <textarea placeholder='Écrivez-nous pour toute demande particulière' />
                    <button>Envoyer</button>
                </div>
            </div>
            
           
            <div className="separator"></div>

            <div className="info-and-follow">
                <div className="info">
                    <h3 className='T3'>Contact & Infos</h3>
                    <div className="contact-item">
                        <img src={images.phone} alt="" />
                        <span>+216 71 234 567</span>
                    </div>
                    <div className="contact-item">
                        <img src={images.email} alt="" />
                        <span>contact@zahra-coffee.tn</span>
                    </div>
                    <div className="contact-item">
                        <img src={images.adress} alt="" />
                        <span>123, Rue de l’Ambiance, La Marsa, Tunis</span>
                    </div>
                </div>
                <div className="follws">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <img src={images.facebook} alt="" />
                        <img src={images.instagram} alt="" />
                        <img src={images.threads} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact