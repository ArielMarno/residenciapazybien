import { React, useState, useEffect } from 'react'
import '../estilos/navegador.css';
import logo from '../assets/logos/logoceleste.png';
import Burguer from './Burguer';
const Navegador = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }



  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <a href="#"><img src={logo} alt="Hogar Paz y Bien" /></a>
      </div>
      <nav className={`links ${click ? 'active' : ''}`}>

        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="burguer">
        <Burguer click={click} handleClick={handleClick}/> 
      </div>
    </div>
  )
}

export default Navegador