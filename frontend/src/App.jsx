import React from 'react'
import Navbar from './compoments/Navbar.jsx/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App