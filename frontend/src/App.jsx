import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './compoments/Navbar.jsx/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Reservation from './pages/rsevation/reservation'; 
import Tabreve from './compoments/tab-reve/Tabreve';
import Conreve from './compoments/con_reve/Conreve';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        {/* مسار الصفحة الرئيسية */}
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        {/* مسار صفحة القائمة */}
        <Route path='/menu' element={
          <>

            <Menu />
          </>
        } />
        {/* مسار صفحة الحجز الرئيسية */}
        <Route path='/reservation' element={
          <>

            <Reservation />
          </>
        } />
        {/* مسار صفحة عرض الطاولات */}
        <Route path='/tables' element={
          <>
            <Tabreve />
          </>
        } />
        {/* مسار صفحة تأكيد الحجز */}
        <Route path='/con_reve' element={
          <>
            <Conreve />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App;