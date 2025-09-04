import React from 'react';
import './Menu_list.css';
import { menu_list } from '../../assets/assets.js';
import AnimatedText from '../SplitText'; 
import MenuItemAnimation from '../MenuItemAnimation'; 

function Menu_list() {
    const classiqueItems = menu_list.filter(item => item.menu_name === "Classique");
    const cafeGlaceItems = menu_list.filter(item => item.menu_name === "Café Glacé");
    const cafeSpecialItems = menu_list.filter(item => item.menu_name === "Café Spécial");
    const patisseriesItems = menu_list.filter(item => item.menu_name === "Pâtisseries");

    const renderMenuItems = (items) => {
        return (
            <MenuItemAnimation>
                <div className="menu-grid">
                    {items.map((item, index) => (
                        <div className="menu-item" key={index}>
                            
                            <div className="item-content">
                                <div className="item-image" style={{ backgroundImage: `url(${item.menu_image})` }}></div>
                                <p className="item-name">{item.item_name}</p>
                                <p className="item-description">{item.item_description}</p>
                                <p className="item-price">{item.item_price}dt</p>
                            </div>
                            
                            <div className="order-overlay">
                                <button className="order-button">Commander</button>
                            </div>
                        </div>
                    ))}
                </div>
            </MenuItemAnimation>
        );
    };

    return (
        <div className='menu-container'>
            <h1 className="menu-title">Menu</h1>
            
            <div className="menu-divider"></div>
            
            <AnimatedText text="Classique" className="section-title" />
            {renderMenuItems(classiqueItems)}
            
            <div className="menu-divider section-divider"></div>

            <AnimatedText text="Café Glacé" className="section-title" />
            {renderMenuItems(cafeGlaceItems)}
            
            <div className="menu-divider section-divider"></div>

            <AnimatedText text="Café Spécial" className="section-title" />
            {renderMenuItems(cafeSpecialItems)}

            <div className="menu-divider section-divider"></div>

            <AnimatedText text="Pâtisseries" className="section-title" />
            {renderMenuItems(patisseriesItems)}
        </div>
    );
}

export default Menu_list;