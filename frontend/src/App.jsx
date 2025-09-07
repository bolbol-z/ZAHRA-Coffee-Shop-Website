import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './compoments/Navbar.jsx/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import besoin from './pages/besoin/besoin';
import Reservation from './pages/rsevation/reservation'; 
import Tabreve from './compoments/tab-reve/Tabreve';
import Conreve from './compoments/con_reve/Conreve';
import Besoin from './pages/besoin/besoin';
import Footer from './compoments/footer/Footer';

const App = () => {
  const homeRef = useRef(null);

  const scrollToContact = () => {
    if (homeRef.current && homeRef.current.scrollToContact) {
      homeRef.current.scrollToContact();
    }
  };

  return (
    <div className='app'>
      <Routes>
   
        <Route path='/' element={
          <>
             <Navbar onContactClick={scrollToContact} />
             <Home ref={homeRef} />
          </>
        } />
    
        <Route path='/menu' element={
          <>

            <Menu />
          </>
        } />
       
        <Route path='/reservation' element={
          <>

            <Reservation />
          </>
        } />
       
        <Route path='/tables' element={
          <>
            <Tabreve />
          </>
        } />
       
        <Route path='/con_reve' element={
          <>
            <Conreve />
          </>
        } />

<       Route path='/besoin' element={
          <>
            <Navbar />
            <Besoin />
            <Footer/>
          </>
        } />

      </Routes>

      
     
    </div>
  )
}

export default App;