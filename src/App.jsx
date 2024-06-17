import './App.css';
import HeaderBar from './componentes/HeaderBar';
import Navegador from '../src/componentes/Navegador';
import Inicio from '../src/componentes/Inicio';
import HogarBar from './componentes/HogarBar.jsx';
import About from './componentes/About';
import Hogar from '../src/componentes/Hogar';
import Servicios from './componentes/Servicios';
import Seguridad from './componentes/Seguridad.jsx';
import Instalaciones from '../src/componentes/Instalaciones';
import Contacto from '../src/componentes/Contacto';
import Footer from '../src/componentes/Footer';

function App() {

  return (
    <>
      <HeaderBar />
      <Navegador />
      <Inicio />
      <HogarBar />
      <Hogar />
      <About />
      <Servicios />
      <Seguridad />
      <Instalaciones />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
