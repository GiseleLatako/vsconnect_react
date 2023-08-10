import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from "./pages/Home/"
import Footer from './components/Footer'
import ListaServicos from "./pages/ListaServicos/"
import header from "./components/header"

//estilização global
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    {/* <Home /> */}
    <Home/>
    {/* <ListaServicos /> */}
    <Footer/>
  </React.StrictMode>,
)
