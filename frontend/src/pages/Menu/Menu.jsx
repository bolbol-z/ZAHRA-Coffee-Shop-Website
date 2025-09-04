import React from 'react'
import './Menu.css'
import Headermenu from '../../compoments/header-menu/Headermenu'
import Menu_list from '../../compoments/menu-list/Menu_list'
import Footer from '../../compoments/footer/Footer' 

function Menu() {
  return (
    <div>
      <Headermenu/>
      <Menu_list/>
      <Footer/>
    </div>
  )
}

export default Menu