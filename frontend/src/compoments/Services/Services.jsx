import React from 'react';
import './Services.css';
import images from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const handleGouterClick = () => {
    navigate('/menu');
  };

  const handleReserverClick = () => {
    navigate('/reservation');
  };

  const handleEnSavoirPlusClick = () => {
    navigate('/besoin');
  };

  return (
    <div className='services'>
        <div className="titel">
            <h2>L’âme de ZAHRA</h2>
        </div>
        <div className="desc">
            <p>chaque tasse raconte une histoire : un mélange d’héritage méditerranéen et d’innovation moderne.<br /> Nous sélectionnons nos grains avec soin pour offrir une expérience authentique et raffinée."</p>
        </div>

        <div className="services-cards-container">
            <div className="conatainer_1 card">
                <img src={images.meal} alt="" />
                <div className="text">
                    <p>Commandez vos boissons préférées directement sur notre site et profitez d’une remise exclusive</p>
                </div>
                <div className="button">
                    <button className='Gouter' onClick={handleGouterClick}>Goûter</button>
                </div>
            </div>
            <div className="conatainer_2 card">
                <img src={images.reserved} alt="" />
                <div className="text">
                    <p>Réservez à l’avance vos sièges privilégiés وsavourez votre café face à une vue exceptionnelle</p>
                </div>
                <div className="button">
                    <button className='Reserver' onClick={handleReserverClick}>Réserver</button>
                </div>
            </div>
            <div className="conatainer_3 card">
                <img src={images.brochure} alt="" />
                <div className="text">
                    <p>Découvrez des grains soigneusement sélectionnés pour offrir une expérience riche et inoubliable</p>
                </div>
                <div className="button">
                    <button className='Reserver' onClick={handleEnSavoirPlusClick}>En savoir plus</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;