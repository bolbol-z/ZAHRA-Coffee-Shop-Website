import React from 'react';
import './Nosbesoin.css';
import images from '../../assets/assets';

function Nosbesoin() {
  const paragraphs = [
    {
      title: "Bienvenue",
      text: "Bienvenue chez Zahra Coffee Shop, un espace dédié à l’art du café et au plaisir du partage.Notre site n’est pas seulement une vitrine, mais une invitation à découvrir l’univers raffiné de nos boissons et à vivre une expérience unique, où chaque tasse raconte une histoire.",
      backgroundColor: "#2E6F5E"
    },
    {
      title: "Notre Mission",
      text: "Notre objectif est simple : offrir à nos visiteurs un voyage sensoriel à travers la richesse du café, de son origine à sa dégustation.Ici, vous trouverez non seulement notre carte complète, mais aussi des créations exclusives, des informations sur nos méthodes de préparation, et la possibilité de réserver facilement votre moment chez Zahra.",
      backgroundColor: "#3FB9C7"
    },
    {
      title: "La Qualité du Café",
      text: "Nous sélectionnons avec soin des grains de café d’exception, issus des meilleures origines, afin de garantir une qualité constante et un goût authentique.Chaque tasse est préparée selon les règles de l’art : une mouture fraîche, une extraction maîtrisée, et une attention portée au moindre détail.",
      backgroundColor: "#A7D8E4"
    },
    {
      title: "Notre Philosophie",
      text: "Chez Zahra Coffee Shop, le café n’est pas une simple boisson, c’est une passion, un rituel, et une source de connexion humaine.Nous croyons qu’un bon café peut transformer un instant ordinaire en un souvenir précieux.",
      backgroundColor: "#1E4D6B"
    },
    {
      title: "Invitation",
      text: "Entrez, explorez, et laissez-vous emporter par l’arôme et la magie de nos boissons.",
      backgroundColor: "#B85C38"
    }
  ];

  return (
    <div className='nosbesoin-container'>
    {paragraphs.map((paragraph, index) => (
      <div key={index} className="section-container">
        <h1 className="section-title">{paragraph.title}</h1>
        <div className="section-divider"></div>
        <div className="content-wrapper">
          <img src={images.newProject5} alt="Coffee Beans Background" className="background-image" />
          <div className="text-box" style={{ background: paragraph.backgroundColor }}>
            <p className="paragraph-text">{paragraph.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Nosbesoin;