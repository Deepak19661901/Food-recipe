import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FoodContextProvider from './context/FoodContextPrvoider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FoodContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </FoodContextProvider>
  </BrowserRouter>

)
