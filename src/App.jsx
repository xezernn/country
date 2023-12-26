import React, { useEffect } from 'react'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ErrorPage from './Component/ErrorPage'
import Element from './Component/Element/Element'
import Region from './Component/Region'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/all");
  }, []);
  return (
    <>
      <Header />
      <Routes>
          <Route path='/all' element={<Main />} />
          <Route path='/all/:id' element={<Element />} />
          <Route path='/:region' element={<Region />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App