import React, { Component } from 'react'
import './Home.css'
import Header from '../../compoments/Header/Header'
import Services from '../../compoments/Services/Services'
import Contact from '../../compoments/contact/contact'
import Footer from '../../compoments/footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <Contact/>
      <Footer/>

      
    </div>
  )
}

export default Home
