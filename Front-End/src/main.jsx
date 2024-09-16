import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  // https://www.youtube.com/watch?v=C3U1RforbH4&t=2504s
  <BrowserRouter>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>,
)
