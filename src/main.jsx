import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContext from './Context/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContext from './Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </DataContext>
  </BrowserRouter>

)
