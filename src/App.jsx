import React, { useEffect, useState } from 'react'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Element from './Component/Element/Element'
import Region from './Component/Region'
import ErrorPage from './Component/ErrorPage'

function App() {
  const navigate = useNavigate();



  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/all/:id' element={<Element />} />
        <Route path='/all/subReg/:region' element={<Region />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App