import React from 'react'
import './Services.css'
import images from '../../assets/assets'

function Services() {
  return (
    <div className='services'>
        <div className="titel">
            <h2>L’âme de ZAHRA</h2>
        </div>
        <div className="desc">
            <p>chaque tasse raconte une histoire : un mélange d’héritage méditerranéen et d’innovation moderne.<br /> Nous sélectionnons nos grains avec soin pour offrir une expérience authentique et raffinée."</p>
        </div>
        {/* الحاوية الجديدة لتصفيف البطاقات بجانب بعضها */}
        <div className="services-cards-container">
            <div className="conatainer_1 card">
                <img src={images.meal} alt="" />
                <div className="text">
                    <p>Commandez vos boissons préférées directement sur notre site et profitez d’une remise exclusive</p>
                </div>
                <div className="button">
                    <button className='Gouter'>Goûter</button>
                </div>
            </div>
            <div className="conatainer_2 card">
                <img src={images.reserved} alt="" />
                <div className="text">
                    <p>Réservez à l’avance vos sièges privilégiés وsavourez votre café face à une vue exceptionnelle</p>
                </div>
                <div className="button">
                    <button className='Reserver'>Réserver</button>
                </div>
            </div>
            <div className="conatainer_3 card">
                <img src={images.brochure} alt="" />
                <div className="text">
                    <p>Découvrez des grains soigneusement sélectionnés pour offrir une expérience riche et inoubliable</p>
                </div>
                <div className="button">
                    <button className='Reserver'>En savoir plus</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services