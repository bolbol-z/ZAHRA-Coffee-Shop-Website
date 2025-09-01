import bg from './bg.png';
import brochure from './brochure.png';
import IMG_2430 from './IMG_2430.jpg';
import meal from './meal.png';
import newProject5 from './New Project-5.png';
import reserved from './reserved.png';
import zahraLogo from './ZAHRA_LOGO.png';
import downarrow from './down-arrow.png';
import phone from './phone-call.png';
import email from './email.png';
import adress from './adress.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import threads from './threads.png';

import espresso from './espresso.png';
import americano from './Americano.png';
import cappuccino from './Cappuccino.png';
import cafeLatte from './Cafe-Latte.png';
import flatWhite from './Flat-White.png'; 
import macchiato from './Macchiato.png';

import icedAmericano from './Iced-Americano.png';
import icedLatte from './Iced-Latte.png';
import caramelIcedLatte from './Caramel-Iced-Latte.png';
import coldBrew from './Cold-Brew.png'; 

import saltedCaramelVelvet from './Salted-Caramel-Velvet.png';
import coconutDreamIcedLatte from './Coconut-Dream-Iced-Latte.png'; 
import peanutButterMocha from './Peanut-Butter-Mocha.png'; 
import cinnamonRollCappuccino from './Cinnamon-Roll-Cappuccino.png'; 
import tropicalEspressoTonic from './Tropical-Espresso-Tonic.png'; 

import tarteTatin from './Tarte-Tatin.png'; 
import eclairAuChocolat from './Éclair-au-Chocolat.png'; 
import macaronsParisiens from './Macarons-Parisiens.png'; 
import cremeBrulee from './Crème-Brûlée.png'; 
import milleFeuille from './Mille-Feuille.png';
import operaCake from './Opera-Cake.png'; 
import tiramisuClassico from './Tiramisu-Classico.png'; 
import cannoliSiciliani from './Cannoli-Siciliani.png'; 
import pastelDeNata from './Pastel-de-Nata.png'; 
import kardinalschnitten from './Kardinalschnitten.png';
import sachertorte from './Sachertorte.png';
import churrosAuChocolat from './Churros-au-Chocolat.png'; 


const images = {
    bg,
    brochure,
    IMG_2430,
    meal,
    newProject5,
    reserved,
    zahraLogo,
    downarrow,
    phone,
    email,
    adress,
    facebook,
    instagram,
    threads,
    Menu: {
        espresso,
        americano,
        cappuccino,
        cafeLatte,
        flatWhite,
        macchiato,
        icedAmericano,
        icedLatte,
        caramelIcedLatte,
        coldBrew,
        saltedCaramelVelvet,
        coconutDreamIcedLatte,
        peanutButterMocha,
        cinnamonRollCappuccino,
        tropicalEspressoTonic,
        tarteTatin,
        eclairAuChocolat,
        macaronsParisiens,
        cremeBrulee,
        milleFeuille,
        operaCake,
        tiramisuClassico,
        cannoliSiciliani,
        pastelDeNata,
        kardinalschnitten,
        sachertorte,
        churrosAuChocolat
    }
};

export const menu_list = [
    {
        menu_name: "Classique",
        menu_image: images.Menu.espresso,
        item_name: "Espresso",
        item_description: "Café serré, intense et corsé. Goût riche et authentique.",
        item_price: 5
    },
    {
        menu_name: "Classique",
        menu_image: images.Menu.americano,
        item_name: "Americano",
        item_description: "Espresso allongé d’eau chaude, saveur douce et équilibrée.",
        item_price: 6
    },
    {
        menu_name: "Classique",
        menu_image: images.Menu.cappuccino,
        item_name: "Cappuccino",
        item_description: "Espresso, lait onctueux et mousse légère. Crémeux et délicat.",
        item_price: 7
    },
    {
        menu_name: "Classique",
        menu_image: images.Menu.cafeLatte,
        item_name: "Café Latte",
        item_description: "Espresso et lait chaud velouté. Saveur douce et raffinée.",
        item_price: 7
    },
    {
        menu_name: "Classique",
        menu_image: images.Menu.flatWhite,
        item_name: "Flat White",
        item_description: "Espresso corsé adouci par une fine micro-mousse.",
        item_price: 8
    },
    {
        menu_name: "Classique",
        menu_image: images.Menu.macchiato,
        item_name: "Macchiato",
        item_description: "Espresso relevé d’une touche de mousse de lait.",
        item_price: 6
    },
    {
        menu_name: "Café Glacé",
        menu_image: images.Menu.icedAmericano,
        item_name: "Iced Americano",
        item_description: "Espresso frais versé sur glace, goût vif et léger.",
        item_price: 7
    },
    {
        menu_name: "Café Glacé",
        menu_image: images.Menu.icedLatte,
        item_name: "Iced Latte",
        item_description: "Espresso frappé مع lait froid et glace. Rafraîchissant.",
        item_price: 8
    },
    {
        menu_name: "Café Glacé",
        menu_image: images.Menu.caramelIcedLatte,
        item_name: "Caramel Iced Latte",
        item_description: "Latte glacé مع caramel onctueux et doux.",
        item_price: 9
    },
    {
        menu_name: "Café Glacé",
        menu_image: images.Menu.coldBrew,
        item_name: "Cold Brew",
        item_description: "Infusion lente 12h, café doux et naturellement sucré.",
        item_price: 10
    },
    {
        menu_name: "Café Spécial",
        menu_image: images.Menu.saltedCaramelVelvet,
        item_name: "Salted Caramel Velvet",
        item_description: "Espresso, caramel salé et vanille. Doux et gourmand.",
        item_price: 11
    },
    {
        menu_name: "Café Spécial",
        menu_image: images.Menu.coconutDreamIcedLatte,
        item_name: "Coconut Dream Iced Latte",
        item_description: "Latte glacé parfumé à la noix de coco. Tropical et léger.",
        item_price: 12
    },
    {
        menu_name: "Café Spécial",
        menu_image: images.Menu.peanutButterMocha,
        item_name: "Peanut Butter Mocha",
        item_description: "Chocolat noir, beurre de cacahuète و espresso riche.",
        item_price: 12
    },
    {
        menu_name: "Café Spécial",
        menu_image: images.Menu.cinnamonRollCappuccino,
        item_name: "Cinnamon Roll Cappuccino",
        item_description: "Cappuccino aux notes de cannelle et caramel.",
        item_price: 11
    },
    {
        menu_name: "Café Spécial",
        menu_image: images.Menu.tropicalEspressoTonic,
        item_name: "Tropical Espresso Tonic",
        item_description: "Espresso pétillant مع tonic et agrumes. Unique et frais.",
        item_price: 12
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.tarteTatin,
        item_name: "Tarte Tatin",
        item_description: "Tarte aux pommes caramélisées, saveur classique et fondante.",
        item_price: 9
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.eclairAuChocolat,
        item_name: "Éclair au Chocolat",
        item_description: "Pâte à choux garnie de crème au chocolat riche.",
        item_price: 8
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.macaronsParisiens,
        item_name: "Macarons Parisiens",
        item_description: "Délicats macarons aux saveurs variées et raffinées.",
        item_price: 10
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.cremeBrulee,
        item_name: "Crème Brûlée",
        item_description: "Crème onctueuse à la vanille, croûte caramélisée croustillante.",
        item_price: 9
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.milleFeuille,
        item_name: "Mille-Feuille",
        item_description: "Feuilletage croustillant, crème légère à la vanille.",
        item_price: 9
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.operaCake,
        item_name: "Opera Cake",
        item_description: "Gâteau raffiné aux couches de café, chocolat et amande.",
        item_price: 12
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.tiramisuClassico,
        item_name: "Tiramisu Classico",
        item_description: "Dessert italien au café, mascarpone et cacao.",
        item_price: 10
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.cannoliSiciliani,
        item_name: "Cannoli Siciliani",
        item_description: "Pâtisserie croustillante farcie à la ricotta sucrée.",
        item_price: 9
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.pastelDeNata,
        item_name: "Pastel de Nata",
        item_description: "Petite tarte portugaise à la crème délicieuse.",
        item_price: 8
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.kardinalschnitten,
        item_name: "Kardinalschnitten",
        item_description: "Spécialité autrichienne au meringue et crème.",
        item_price: 11
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.sachertorte,
        item_name: "Sachertorte",
        item_description: "Gâteau au chocolat viennois, touche d’abricot subtile.",
        item_price: 12
    },
    {
        menu_name: "Pâtisseries",
        menu_image: images.Menu.churrosAuChocolat,
        item_name: "Churros au Chocolat",
        item_description: "Churros croustillants servis avec sauce chocolat.",
        item_price: 8
    }
];

export default images;